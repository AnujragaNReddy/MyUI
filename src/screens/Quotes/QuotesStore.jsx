import React, { createContext, useContext, useState } from "react";

const TOOL_OPTIONS = [
  {
    key: "backgroundColors",
    label: "Background Colors",
    component: "ColorOptionsList",
  },
  {
    key: "backgroundImages",
    label: "Background Images",
    component: "BackgroundOptionsList",
  },
  {
    key: "foregroundColors",
    label: "Text Colors",
    component: "ColorOptionsList",
  },
  { key: "fonts", label: "Fonts", component: "FontOptionsList" },
  { key: "fontSize", label: "Font Size", component: "FontSizeOptionsList" },
  {
    key: "fontWeight",
    label: "Font Weight",
    component: "FontWeightOptionsList",
  },
  { key: "fontStyle", label: "Font Style", component: "FontStyleOptionsList" },
  {
    key: "textAlign",
    label: "Text Alignment",
    component: "TextAlignOptionsList",
  },
  {
    key: "lineHeight",
    label: "Line Height",
    component: "LineHeightOptionsList",
  },
  {
    key: "letterSpacing",
    label: "Letter Spacing",
    component: "LetterSpacingOptionsList",
  },
  { key: "shadows", label: "Text Shadows", component: "ShadowOptionsList" },
  { key: "borders", label: "Borders", component: "BorderOptionsList" },
  { key: "icons", label: "Icons", component: "IconOptionsList" },
  { key: "emojis", label: "Emojis", component: "EmojiOptionsList" },
  { key: "stickers", label: "Stickers", component: "StickerOptionsList" },
  { key: "quotes", label: "Quote Styles", component: "QuoteStyleOptionsList" },
];

const QuotesContext = createContext();

export function QuotesProvider({ children }) {
  // Default to first tool's key
  const [selectedTool, setSelectedTool] = useState(TOOL_OPTIONS[0].key);
  return (
    <QuotesContext.Provider
      value={{ TOOL_OPTIONS, selectedTool, setSelectedTool }}
    >
      {children}
    </QuotesContext.Provider>
  );
}

export function useQuotes() {
  return useContext(QuotesContext);
}
