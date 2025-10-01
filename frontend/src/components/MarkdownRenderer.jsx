import React from 'react';
import ReactMarkdown from 'react-markdown';
import { InlineMath, BlockMath } from 'react-katex';

// Simple renderer: splits source into blocks of markdown and math
export default function MarkdownRenderer({ source = '' }) {
  if (!source) return null;

  // split by block math $$...$$
  const blockParts = [];
  let rest = source;
  const blockRegex = /\$\$([\s\S]+?)\$\$/m;
  while (true) {
    const m = blockRegex.exec(rest);
    if (!m) break;
    const before = rest.slice(0, m.index);
    if (before) blockParts.push({ type: 'markdown', content: before });
    blockParts.push({ type: 'blockMath', content: m[1] });
    rest = rest.slice(m.index + m[0].length);
  }
  if (rest) blockParts.push({ type: 'markdown', content: rest });

  // For each markdown part, further split inline math \(...\) or $...$
  const segments = [];
  const inlineRegex = /\\\((.+?)\\\)|\$(.+?)\$/g;
  blockParts.forEach(part => {
    if (part.type === 'blockMath') {
      segments.push(part);
      return;
    }
    const text = part.content;
    let lastIndex = 0;
    let m;
    while ((m = inlineRegex.exec(text)) !== null) {
      const before = text.slice(lastIndex, m.index);
      if (before) segments.push({ type: 'markdown', content: before });
      const math = m[1] || m[2];
      segments.push({ type: 'inlineMath', content: math });
      lastIndex = m.index + m[0].length;
    }
    const tail = text.slice(lastIndex);
    if (tail) segments.push({ type: 'markdown', content: tail });
  });

  return (
    <div className="markdown-renderer">
      {segments.map((seg, i) => {
        if (seg.type === 'markdown') {
          return <ReactMarkdown key={i}>{seg.content}</ReactMarkdown>;
        }
        if (seg.type === 'blockMath') {
          return <div key={i} style={{ margin: '0.5rem 0' }}><BlockMath math={seg.content} /></div>;
        }
        if (seg.type === 'inlineMath') {
          return <span key={i} style={{ display: 'inline-block' }}><InlineMath math={seg.content} /></span>;
        }
        return null;
      })}
    </div>
  );
}
