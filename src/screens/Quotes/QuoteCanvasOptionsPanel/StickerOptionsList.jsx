import React from "react";

const STICKERS = [
  "🌈",
  "🍀",
  "🎵",
  "📚",
  "🎬",
  "🎨",
  "🚀",
  "🌻",
  "🍕",
  "🐶",
  "🐱",
  "🦄",
  "🍩",
  "⚡",
  "🎲",
];

export default function StickerOptionsList({ onSelect }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      {STICKERS.map((sticker) => (
        <div
          key={sticker}
          style={{ fontSize: 28, cursor: "pointer", padding: 8 }}
          onClick={() => onSelect?.(sticker)}
        >
          {sticker}
        </div>
      ))}
    </div>
  );
}
