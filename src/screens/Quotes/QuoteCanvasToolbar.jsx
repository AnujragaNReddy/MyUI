import React, { useState } from 'react';
import './Quotes.css';

const TOOL_OPTIONS = [
  'B-colors',
  'BG-images',
  'Emojis',
  'F-Colors',
  'FontOptions',
  'Fonts',
  'icons',
];

const sortedOptions = [...TOOL_OPTIONS].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

export default function QuoteCanvasToolbar() {
  const [search, setSearch] = useState('');
  const filteredOptions = sortedOptions.filter(opt => opt.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="quotes-toolbar">
      <div className="quotes-toolbar-title">Tools</div>
      <input
        className="quotes-toolbar-search"
        type="text"
        placeholder="Search tools..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="quotes-toolbar-grid">
        {filteredOptions.map(option => (
          <div className="quotes-toolbar-tile" key={option}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
