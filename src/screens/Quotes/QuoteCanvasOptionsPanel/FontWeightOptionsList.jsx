import React from "react";

const FONT_WEIGHTS = [
  "normal",
  "bold",
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
];

export default function FontWeightOptionsList({ onSelect }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {FONT_WEIGHTS.map((weight) => (
        <div
          key={weight}
          style={{ fontWeight: weight, cursor: "pointer", padding: 8 }}
          onClick={() => onSelect?.(weight)}
        >
          {weight}
        </div>
      ))}
    </div>
  );
}
