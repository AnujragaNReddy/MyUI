import React from "react";
import "../Quotes.css";
import { useQuotes } from "../QuotesStore";
import ColorOptionsList from "./ColorOptionsList";
import FontOptionsList from "./FontOptionsList";
import BackgroundOptionsList from "./BackgroundOptionsList";
import FontSizeOptionsList from "./FontSizeOptionsList";
import FontWeightOptionsList from "./FontWeightOptionsList";
import FontStyleOptionsList from "./FontStyleOptionsList";
import TextAlignOptionsList from "./TextAlignOptionsList";
import LineHeightOptionsList from "./LineHeightOptionsList";
import LetterSpacingOptionsList from "./LetterSpacingOptionsList";
import ShadowOptionsList from "./ShadowOptionsList";
import BorderOptionsList from "./BorderOptionsList";
import IconOptionsList from "./IconOptionsList";
import EmojiOptionsList from "./EmojiOptionsList";
import StickerOptionsList from "./StickerOptionsList";
import QuoteStyleOptionsList from "./QuoteStyleOptionsList";

const COMPONENT_MAP = {
  ColorOptionsList,
  FontOptionsList,
  BackgroundOptionsList,
  FontSizeOptionsList,
  FontWeightOptionsList,
  FontStyleOptionsList,
  TextAlignOptionsList,
  LineHeightOptionsList,
  LetterSpacingOptionsList,
  ShadowOptionsList,
  BorderOptionsList,
  IconOptionsList,
  EmojiOptionsList,
  StickerOptionsList,
  QuoteStyleOptionsList,
};

export default function QuoteCanvasOptionsList() {
  const { TOOL_OPTIONS, selectedTool } = useQuotes();
  const tool = TOOL_OPTIONS.find((t) => t.key === selectedTool);
  let content = null;
  if (tool && COMPONENT_MAP[tool.component]) {
    const Comp = COMPONENT_MAP[tool.component];
    content = <Comp />;
  } else {
    content = (
      <div style={{ color: "#fff", fontSize: 16, padding: 12 }}>
        Selected Tool: {tool ? tool.label : selectedTool}
      </div>
    );
  }

  return (
    <div className="quotes-options-list">
      <div className="quotes-options-title">
        {tool ? tool.label : selectedTool}
      </div>
      {content}
    </div>
  );
}
