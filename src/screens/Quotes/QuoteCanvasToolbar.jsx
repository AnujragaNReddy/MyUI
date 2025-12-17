import React, { useState } from "react";
import "./Quotes.css";
import { useQuotes } from "./QuotesStore";

export default function QuoteCanvasToolbar() {
  const { TOOL_OPTIONS, selectedTool, setSelectedTool } = useQuotes();
  const [search, setSearch] = useState("");
  const sortedOptions = [...TOOL_OPTIONS].sort((a, b) =>
    a.label.localeCompare(b.label, undefined, { sensitivity: "base" })
  );
  const filteredOptions = sortedOptions.filter((opt) =>
    opt.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="quotes-toolbar">
      <div className="quotes-toolbar-title">Tools</div>
      <input
        className="quotes-toolbar-search"
        type="text"
        placeholder="Search tools..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="quotes-toolbar-grid">
        {filteredOptions.map((option) => (
          <div
            className="quotes-toolbar-tile"
            key={option.key}
            style={
              option.key === selectedTool
                ? { background: "#4a8ef0", color: "#fff" }
                : {}
            }
            onClick={() => setSelectedTool(option.key)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
}
