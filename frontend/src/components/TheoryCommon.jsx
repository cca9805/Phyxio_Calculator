import React, { useEffect, useState } from 'react';
import MarkdownRenderer from './MarkdownRenderer';
import { getTheoryByTopic } from '../utils/loadTheory';

export default function TheoryCommon({ topicId = 'mcu', fallback = null, panelStyle = null }) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    (async () => {
      try {
        const mdRaw = await getTheoryByTopic(topicId);
        // normalize possible shapes: string | { default: string } | { content: string } | module namespace
        let md = null;
        if (!mdRaw) md = null;
        else if (typeof mdRaw === 'string') md = mdRaw;
        else if (typeof mdRaw.default === 'string') md = mdRaw.default;
        else if (typeof mdRaw.content === 'string') md = mdRaw.content;
        else if (typeof mdRaw === 'object') {
          // try common fields, else serialize fallback
          md = (mdRaw.text && typeof mdRaw.text === 'string') ? mdRaw.text : JSON.stringify(mdRaw, null, 2);
        } else {
          md = String(mdRaw);
        }

        if (mounted) setContent(md || null);
      } catch (err) {
        if (mounted) setContent(null);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [topicId]);

  if (loading) return <div className="theory-card" style={panelStyle}>Cargando teoría…</div>;
  if (!content) {
    if (fallback) return <div className="theory-card" style={panelStyle}>{fallback}</div>;
    return <div className="theory-card" style={panelStyle}>No hay teoría disponible para este subtema.</div>;
  }

  return (
    <div className="theory-card" style={panelStyle}>
      <MarkdownRenderer source={content} />
    </div>
  );
}
