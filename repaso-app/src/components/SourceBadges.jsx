import React from 'react';
import { ExternalLink } from 'lucide-react';
import { sources } from '../content/sources.js';

export default function SourceBadges({ sourceIds = [] }) {
  return (
    <div className="source-box">
      <strong>Fuentes usadas para verificar este contenido</strong>
      <div className="source-list">
        {sourceIds.map(id => {
          const s = sources[id];
          if (!s) return null;
          return <a key={id} href={s.url} target="_blank" rel="noreferrer" className="source-chip">{s.name}<ExternalLink size={13}/></a>;
        })}
      </div>
    </div>
  );
}
