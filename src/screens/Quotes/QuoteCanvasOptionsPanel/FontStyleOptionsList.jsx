import React from "react";

const FONT_STYLES = ["normal", "italic", "oblique"];

export default function FontStyleOptionsList({ onSelect }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {FONT_STYLES.map((style) => (
        <div
          key={style}
          style={{ fontStyle: style, cursor: "pointer", padding: 8 }}
          onClick={() => onSelect?.(style)}
        >
          {style}
        </div>
      ))}
    </div>
  );
}
