import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

export default function MarkdownRenderer({ source = '', tag: Wrapper = 'div', className = '' }) {
  if (!source) {
    return <div className="markdown-empty">No hay contenido disponible.</div>;
  }
  
  const content = (
      <ReactMarkdown
        children={source}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
      />
  );

  if (Wrapper) {
      return <Wrapper className={className || 'markdown-content'}>{content}</Wrapper>;
  }

  return content;
}
