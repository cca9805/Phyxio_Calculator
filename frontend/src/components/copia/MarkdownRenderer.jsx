import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Ensure the KaTeX stylesheet is imported in your main app file 
// (e.g., main.jsx or App.jsx) to apply styling.
// import 'katex/dist/katex.min.css';

export default function MarkdownRenderer({ source = '' }) {
  if (!source) {
    return <div className="markdown-empty">No content available.</div>;
  }

  return (
    <div className="markdown-content">
      <ReactMarkdown
        children={source}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
      />
    </div>
  );
}
