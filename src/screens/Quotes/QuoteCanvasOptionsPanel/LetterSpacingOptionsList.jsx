import React from "react";

const LETTER_SPACINGS = [0, 0.5, 1, 1.5, 2, 3, 4, 5];

export default function LetterSpacingOptionsList({ onSelect }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {LETTER_SPACINGS.map((ls) => (
        <div
          key={ls}
          style={{ letterSpacing: ls, cursor: "pointer", padding: 8 }}
          onClick={() => onSelect?.(ls)}
        >
          {ls}px
        </div>
      ))}
    </div>
  );
}
