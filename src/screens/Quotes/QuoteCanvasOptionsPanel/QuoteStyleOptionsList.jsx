import React from "react";

const QUOTE_STYLES = [
  "Classic",
  "Modern",
  "Handwritten",
  "Minimal",
  "Bold",
  "Elegant",
  "Comic",
  "Serif",
  "Sans-serif",
  "Monospace",
];

export default function QuoteStyleOptionsList({ onSelect }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {QUOTE_STYLES.map((style) => (
        <div
          key={style}
          style={{ cursor: "pointer", padding: 8 }}
          onClick={() => onSelect?.(style)}
        >
          {style}
        </div>
      ))}
    </div>
  );
}
