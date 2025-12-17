import React from "react";

const EMOJIS = [
  "😀",
  "😂",
  "😍",
  "😎",
  "😭",
  "😡",
  "👍",
  "🙏",
  "🎉",
  "🔥",
  "🌟",
  "💡",
  "❤️",
  "🥳",
  "🤔",
];

export default function EmojiOptionsList({ onSelect }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      {EMOJIS.map((emoji) => (
        <div
          key={emoji}
          style={{ fontSize: 28, cursor: "pointer", padding: 8 }}
          onClick={() => onSelect?.(emoji)}
        >
          {emoji}
        </div>
      ))}
    </div>
  );
}
