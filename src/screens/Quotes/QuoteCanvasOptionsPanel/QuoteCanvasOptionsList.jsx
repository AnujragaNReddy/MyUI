import React, { useState } from 'react';
import '../Quotes.css';

const COLORS = [
  '#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF',
  '#A66CFF', '#FF6F91', '#FFC75F', '#0081CF',
  '#F9F871', '#B983FF', '#FFB4B4', '#6EE7B7',
];

export default function QuoteCanvasOptionsList() {
  const [search, setSearch] = useState('');
  const filteredColors = COLORS.filter(c => c.replace('#','').toLowerCase().includes(search.replace('#','').toLowerCase()));

  return (
    <div className="quotes-options-list">
      <div className="quotes-options-title">Colors</div>
      <input
        className="quotes-options-search"
        type="text"
        placeholder="Search colors..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="quotes-options-grid">
        {filteredColors.map(color => (
          <div className="quotes-color-tile" key={color} style={{ background: 'rgba(255,255,255,0.18)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: color, border: '2px solid #fff', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }} />
            <span style={{ marginLeft: 10, color: '#222', fontWeight: 500, fontSize: 14 }}>{color}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
