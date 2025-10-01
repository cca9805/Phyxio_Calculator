import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

function uc(s){ return String(s || '').toUpperCase(); }
function safeId(s){ return String(s||'').toLowerCase().replace(/\s+/g,'_'); }

async function ensureDir(dir){
  try { await fs.mkdir(dir, { recursive: true }); } catch { /* ignore */ }
}

async function writeIfNotExists(filePath, content, force = false) {
  try {
    if (!force) {
      await fs.access(filePath);
      console.log('SKIP (exists):', filePath);
      return;
    }
  } catch {
    // file does not exist -> continue
  }
  await fs.writeFile(filePath, content, 'utf8');
  console.log('WROTE:', filePath);
}

function templateCalculators(subId) {
  return `// filepath: src/data/dinamica/\${subId}/\${subId}Calculators.js
export const calculators = [
  // añade tus calculadoras aquí
];

export default calculators;
`;
}

function templateFormulas(subId) {
  return `// filepath: src/data/dinamica/\${subId}/\${subId}Formulas.js
export const formulas = [
  // añade tus fórmulas aquí
];

export default formulas;
`;
}

function templateEjerciciosJson() {
  return `[
  {
    "id": "",
    "title": "",
    "prompt": "",
    "solution": [],
    "answer": ""
  }
]
`;
}

function templateTeoriaMd(subId) {
  return `<!-- filepath: src/data/dinamica/\${subId}/teoria.md -->
# Teoría: \${subId.toUpperCase()}

Escribe aquí el contenido de la teoría en Markdown.
`;
}

function templateDataFile(subId) {
  const subIdLower = String(subId).toLowerCase();
  const subIdUpper = String(subId).toUpperCase();
  return `import teoriaText from './${subIdLower}/teoria.md?raw';
import * as FormulasModule from '../../pages/dinamica/${subIdUpper}Sections/Formulas';
import * as EjerciciosModule from '../../pages/dinamica/${subIdUpper}Sections/Ejercicios';
import * as CalculadoraModule from '../../pages/dinamica/${subIdUpper}Sections/Calculadora';

const Formulas = FormulasModule.default || FormulasModule;
const Ejercicios = EjerciciosModule.default || EjerciciosModule;
const Calculadora = CalculadoraModule.default || CalculadoraModule;

const ${subIdUpper}Data = {
  id: '${subIdLower}',
  meta: {
    id: '${subIdLower}',
    title: '${subIdUpper}',
    intro: '',
    tldr: ''
  },
  sections: [
    { id: 'teoria', title: 'Teoría', type: 'markdown', content: teoriaText },
    { id: 'formulas', title: 'Fórmulas', type: 'formulas', content: Formulas },
    { id: 'ejercicios', title: 'Ejercicios', type: 'exercises', content: Ejercicios },
    { id: 'calculadoras', title: 'Calculadoras', type: 'calculators', content: Calculadora }
  ]
};

export default ${subIdUpper}Data;
`;
}

function wrapperCalculadora(pageRelPath, subId) {
  return `// filepath: \${pageRelPath}/Calculadora.jsx
import React from 'react';
import CalculadoraCommon from '../../../components/CalculadoraCommon';

export default function \${uc(subId)}CalculadoraWrapper(props) {
  return <CalculadoraCommon topicId="\${subId}" {...props} />;
}
`;
}

function wrapperEjercicios(pageRelPath, subId) {
  return `// filepath: \${pageRelPath}/Ejercicios.jsx
import React from 'react';
import ExercisesCommon from '../../../components/ExercisesCommon';

export default function \${uc(subId)}EjerciciosWrapper(props) {
  return <ExercisesCommon topicId="\${subId}" {...props} />;
}
`;
}

function wrapperTeoria(pageRelPath, subId) {
  return `// filepath: \${pageRelPath}/Teoria.jsx
import React from 'react';
import TheoryCommon from '../../../components/TheoryCommon';

export default function \${uc(subId)}TeoriaWrapper(props) {
  return <TheoryCommon topicId="\${subId}" {...props} />;
}
`;
}

function wrapperFormulas(pageRelPath, subId) {
  return `// filepath: \${pageRelPath}/Formulas.jsx
import React from 'react';
import FormulaCalculator from '../../../components/FormulaCalculator';

export default function \${uc(subId)}FormulasWrapper(props) {
  return <FormulaCalculator topicId="\${subId}" {...props} />;
}
`;
}

function templateSubtopicPage(topicFolder, subId) {
  const subIdLower = String(subId).toLowerCase();
  const subIdUpper = String(subId).toUpperCase();
  return `import React from 'react';
import SubtopicLayout from '../../components/SubtopicLayout';

export default function ${subIdUpper}() {
  return (
    <div className="page-theme ${subIdLower}-page" data-theme="${subIdLower}">
      <SubtopicLayout
        meta={{
          id: '${subIdLower}',
          title: '',
          intro: '',
        }}
        items={[]}
        rightPanel={<></>}
      />
    </div>
  );
}
`;
}

/* Inserciones automáticas en App.jsx, nivel3.css y SubtopicLayout.jsx */

// Añadir import y <Route> del subtema en App.jsx
async function patchAppRoutes(root, topicFolder, subId) {
  const appPath = path.join(root, 'src', 'App.jsx');
  try {
    let src = await fs.readFile(appPath, 'utf8');
    const U = uc(subId);
    const importLine = `import ${U} from './pages/${topicFolder}/${U}';`;
    if (!src.includes(importLine)) {
      // insertar tras el último import
      const importRegex = /(^import .+?;[\r\n]+)/gms;
      let lastMatch = null; let m;
      while ((m = importRegex.exec(src)) !== null) lastMatch = m;
      if (lastMatch) {
        src = src.slice(0, lastMatch.index + lastMatch[0].length) + importLine + '\n' + src.slice(lastMatch.index + lastMatch[0].length);
      } else {
        src = importLine + '\n' + src;
      }
    }

    // insertar Route antes de </Routes>
    const routeLine = `        <Route path="/${topicFolder}/${subId}" element={<${U} />} />`;
    if (!src.includes(routeLine)) {
      if (src.includes('</Routes>')) {
        src = src.replace('</Routes>', routeLine + '\n      </Routes>');
      } else {
        console.warn('WARN: </Routes> not found in App.jsx, skipping route insertion');
      }
    }

    await fs.writeFile(appPath, src, 'utf8');
    console.log('Patched App.jsx with route for', subId);
  } catch (e) {
    console.warn('Skipping App.jsx patch (not found?):', e.message);
  }
}

// Añadir bloque de estilos del subtema en nivel3.css
async function patchNivel3Css(root, subId) {
  const cssPath = path.join(root, 'src', 'styles', 'nivel3.css');
  try {
    let css = await fs.readFile(cssPath, 'utf8');
    const marker = `/* ${subId}-page styles */`;
    if (!css.includes(marker)) {
      const block = `
/* ${subId}-page styles */
.${subId}-page .formula-card { background: var(--navy-500, #13294d); color: #fff; }
.${subId}-page .calculators-card, .${subId}-page .theory-card { background: rgba(19,41,77,0.08); }
.${subId}-page .accordion-summary .summary-main { color: #13294d; }
`;
      css += '\n' + block;
      await fs.writeFile(cssPath, css, 'utf8');
      console.log('Patched nivel3.css with styles for', subId);
    } else {
      console.log('SKIP (css exists): styles for', subId);
    }
  } catch (e) {
    console.warn('Skipping nivel3.css patch (not found?):', e.message);
  }
}

// Importar fórmulas del subtema y actualizar detección/mapping en SubtopicLayout.jsx
async function patchSubtopicLayout(root, topicFolder, subId) {
  const filePath = path.join(root, 'src', 'components', 'SubtopicLayout.jsx');
  try {
    let src = await fs.readFile(filePath, 'utf8');
    let changed = false;

    // 1) import formulas del subtema
    const importLine = `import { formulas as ${subId}Formulas } from '../data/${topicFolder}/${subId}/${subId}Formulas';`;
    if (!src.includes(importLine)) {
      // Insertar tras la última importación de "formulas as ..."
      const importBlockRegex = /import\s+\{\s*formulas\s+as[\s\S]+?;[\r\n]+/g;
      const matches = [...src.matchAll(importBlockRegex)];
      if (matches.length > 0) {
        const last = matches[matches.length - 1];
        const insertPos = last.index + last[0].length;
        src = src.slice(0, insertPos) + importLine + '\n' + src.slice(insertPos);
      } else {
        // fallback: insertar tras los imports
        const anyImport = /(^import .+?;[\r\n]+)/gms;
        let last = null, m;
        while ((m = anyImport.exec(src)) !== null) last = m;
        const pos = last ? last.index + last[0].length : 0;
        src = src.slice(0, pos) + importLine + '\n' + src.slice(pos);
      }
      changed = true;
    }

    // 2) ampliar inferredFromPath (detección por URL)
    if (src.includes('const inferredFromPath')) {
      const re = /const inferredFromPath\s*=\s*([^;]+);/;
      const m = src.match(re);
      if (m && !m[0].includes(`/${subId}`)) {
        const newExpr = `routePath.includes('/${subId}') ? '${subId}' : (${m[1]})`;
        src = src.replace(re, `const inferredFromPath = ${newExpr};`);
        changed = true;
      }
    }

    // 3) ampliar fallbackFormulas
    if (src.includes('const fallbackFormulas')) {
      const sentinel = `topicId.includes('${subId}') ? ${subId}Formulas : `;
      if (!src.includes(sentinel)) {
        src = src.replace(/const fallbackFormulas\s*=\s*/, `const fallbackFormulas = ${sentinel}`);
        changed = true;
      }
    }

    if (changed) {
      await fs.writeFile(filePath, src, 'utf8');
      console.log('Patched SubtopicLayout.jsx for', subId);
    } else {
      console.log('SKIP (SubtopicLayout already includes subtopic):', subId);
    }
  } catch (e) {
    console.warn('Skipping SubtopicLayout.jsx patch (not found?):', e.message);
  }
}

async function patchKnownTopicsInUtils(root, subtopicId) {
  const utilsFiles = [
    { path: 'src/utils/loadTheory.js', arrayName: 'KNOWN_TOPICS' },
    { path: 'src/utils/loadFormulas.js', arrayName: 'KNOWN_TOPICS' },
    { path: 'src/utils/loadEjercicios.js', arrayName: 'KNOWN_TOPICS' }
  ];
  for (const { path: relPath, arrayName } of utilsFiles) {
    const filePath = path.join(root, relPath);
    try {
      let src = await fs.readFile(filePath, 'utf8');
      // Busca el array y añade el subtema si no está
      const arrRegex = new RegExp(`(${arrayName}\\s*=\\s*\\[)([^\\]]*)\\]`);
      const match = src.match(arrRegex);
      if (match && !match[2].includes(`'${subtopicId}'`)) {
        const updated = `${match[1]}${match[2].trim().replace(/,\s*$/, '')}, '${subtopicId}']`;
        src = src.replace(arrRegex, updated);
        await fs.writeFile(filePath, src, 'utf8');
        console.log(`Patched ${relPath}: added '${subtopicId}' to ${arrayName}`);
      } else {
        console.log(`SKIP (${subtopicId} already in ${arrayName}): ${relPath}`);
      }
    } catch (e) {
      console.warn(`Could not patch ${relPath}:`, e.message);
    }
  }
}

async function patchAccordionCss(root, subId) {
  const subIdLower = String(subId).toLowerCase();
  const cssPath = path.join(root, 'src', 'styles', 'components', '_accordion.css');
  try {
    let css = await fs.readFile(cssPath, 'utf8');
    const marker = `[data-theme="${subIdLower}"] .accordion-item`;
    if (!css.includes(marker)) {
      const block = `
[data-theme="${subIdLower}"] .accordion-item {
  background: var(--tone-300) !important;
  border: 1px solid var(--border-color);
}

[data-theme="${subIdLower}"] .accordion-button {
  background-color: var(--color-primary);
  color: white;
}

[data-theme="${subIdLower}"] .accordion-panel {
  background: var(--sub-bg, var(--color-bg));
  color: var(--sub-text, var(--color-text));
}
`;
      css += '\n' + block;
      await fs.writeFile(cssPath, css, 'utf8');
      console.log(`Patched _accordion.css with styles for ${subIdLower}`);
    } else {
      console.log(`SKIP (_accordion.css already includes styles for ${subIdLower})`);
    }
  } catch (e) {
    console.warn(`Could not patch _accordion.css:`, e.message);
  }
}

async function scaffold(topicFolder, subtopicId, options = {}) {
  const __filename = fileURLToPath(import.meta.url);
  const root = path.resolve(path.dirname(__filename), '..'); // frontend
  const dataDir = path.join(root, 'src', 'data', topicFolder, subtopicId);
  const pagesDir = path.join(root, 'src', 'pages', topicFolder, `${uc(subtopicId)}Sections`);
  await ensureDir(dataDir);
  await ensureDir(pagesDir);

  const force = !!options.force;

  // data files
  await writeIfNotExists(path.join(dataDir, `${subtopicId}Calculators.js`), templateCalculators(subtopicId), force);
  await writeIfNotExists(path.join(dataDir, `${subtopicId}Formulas.js`), templateFormulas(subtopicId), force);
  await writeIfNotExists(path.join(dataDir, `ejercicios.json`), templateEjerciciosJson(), force);
  await writeIfNotExists(path.join(dataDir, `teoria.md`), templateTeoriaMd(subtopicId), force);

  // fallback data file at src/data/dinamica/<subtopic>Data.js
  const U = uc(subtopicId);
  const fallbackDataPath = path.join(root, 'src', 'data', 'dinamica', `${U}Data.js`);
  await writeIfNotExists(fallbackDataPath, templateDataFile(subtopicId), force);

  // pages wrappers
  const relPagePath = `src/pages/${topicFolder}/${uc(subtopicId)}Sections`;
  await writeIfNotExists(path.join(pagesDir, 'Calculadora.jsx'), wrapperCalculadora(relPagePath, subtopicId), force);
  await writeIfNotExists(path.join(pagesDir, 'Ejercicios.jsx'), wrapperEjercicios(relPagePath, subtopicId), force);
  await writeIfNotExists(path.join(pagesDir, 'Teoria.jsx'), wrapperTeoria(relPagePath, subtopicId), force);
  await writeIfNotExists(path.join(pagesDir, 'Formulas.jsx'), wrapperFormulas(relPagePath, subtopicId), force);

  // create a basic subtopic page (e.g. src/pages/dinamica/NEWTON.jsx)
  const subpagePath = path.join(root, 'src', 'pages', topicFolder, `${U}.jsx`);
  await writeIfNotExists(subpagePath, templateSubtopicPage(topicFolder, subtopicId), force);

  // --- NUEVO: parches automáticos ---
  await patchAppRoutes(root, topicFolder, subtopicId);
  await patchNivel3Css(root, subtopicId);
  await patchSubtopicLayout(root, topicFolder, subtopicId);
  await patchKnownTopicsInUtils(root, subtopicId);
  await patchAccordionCss(root, subtopicId);

  console.log('Scaffold complete for', topicFolder, subtopicId);
}

// CLI (ESM-friendly)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(__filename)) {
  const argv = process.argv.slice(2);
  if (argv.length < 2) {
    console.log('Usage: node scripts/scaffoldSubtopicDinamica.js <topicFolder> <subtopicId> [--force]');
    console.log('Example: node scripts/scaffoldSubtopicDinamica.js dinamica newton');
    process.exit(1);
  }
  const [topicFolder, subtopicId, flag] = argv;
  const force = flag === '--force';
  scaffold(topicFolder, safeId(subtopicId), { force }).catch(err => {
    console.error('Error scaffolding:', err);
    process.exit(2);
  });
}

export { scaffold };