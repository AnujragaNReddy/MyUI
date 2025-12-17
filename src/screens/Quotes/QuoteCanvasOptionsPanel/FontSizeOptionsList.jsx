import React from "react";

const FONT_SIZES = [12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 56, 64];

export default function FontSizeOptionsList({ onSelect }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {FONT_SIZES.map((size) => (
        <div
          key={size}
          style={{ fontSize: size, cursor: "pointer", padding: 8 }}
          onClick={() => onSelect?.(size)}
        >
          {size}px
        </div>
      ))}
    </div>
  );
}
