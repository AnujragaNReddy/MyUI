import React from "react";

const SHADOWS = [
  "none",
  "1px 1px 2px #000",
  "2px 2px 4px #333",
  "0 2px 8px #888",
  "0 4px 12px #222",
];

export default function ShadowOptionsList({ onSelect }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {SHADOWS.map((shadow) => (
        <div
          key={shadow}
          style={{ textShadow: shadow, cursor: "pointer", padding: 8 }}
          onClick={() => onSelect?.(shadow)}
        >
          {shadow}
        </div>
      ))}
    </div>
  );
}
