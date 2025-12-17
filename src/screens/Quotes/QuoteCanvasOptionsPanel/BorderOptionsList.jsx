import React from "react";

const BORDERS = [
  "none",
  "1px solid #000",
  "2px dashed #4a8ef0",
  "3px double #ff6b6b",
  "2px dotted #ffd93d",
];

export default function BorderOptionsList({ onSelect }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {BORDERS.map((border) => (
        <div
          key={border}
          style={{ border, padding: 8, cursor: "pointer" }}
          onClick={() => onSelect?.(border)}
        >
          {border}
        </div>
      ))}
    </div>
  );
}
