import React from "react";

const LINE_HEIGHTS = [1, 1.15, 1.25, 1.5, 1.75, 2, 2.5, 3];

export default function LineHeightOptionsList({ onSelect }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {LINE_HEIGHTS.map((lh) => (
        <div
          key={lh}
          style={{ lineHeight: lh, cursor: "pointer", padding: 8 }}
          onClick={() => onSelect?.(lh)}
        >
          {lh}
        </div>
      ))}
    </div>
  );
}
