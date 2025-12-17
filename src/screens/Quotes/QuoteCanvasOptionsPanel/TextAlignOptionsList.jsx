import React from "react";

const TEXT_ALIGNS = ["left", "center", "right", "justify"];

export default function TextAlignOptionsList({ onSelect }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {TEXT_ALIGNS.map((align) => (
        <div
          key={align}
          style={{ textAlign: align, cursor: "pointer", padding: 8 }}
          onClick={() => onSelect?.(align)}
        >
          {align.charAt(0).toUpperCase() + align.slice(1)}
        </div>
      ))}
    </div>
  );
}
