import React, { createContext, useContext, useState } from "react";

const defaultCanvasState = {
  backgroundColor: "#fff",
  backgroundImage: null,
  textColor: "#222",
  fontFamily: "Arial",
  fontSize: 32,
  fontWeight: "normal",
  fontStyle: "normal",
  textAlign: "center",
  lineHeight: 1.2,
  letterSpacing: 0,
  textShadow: "none",
  border: "none",
  icon: null,
  emoji: null,
  sticker: null,
  quoteStyle: "Classic",
  text: "Your quote here",
};

const CanvasContext = createContext();

export function CanvasProvider({ children }) {
  const [canvasState, setCanvasState] = useState(defaultCanvasState);
  const updateCanvas = (updates) =>
    setCanvasState((prev) => ({ ...prev, ...updates }));
  return (
    <CanvasContext.Provider value={{ canvasState, updateCanvas }}>
      {children}
    </CanvasContext.Provider>
  );
}

export function useCanvas() {
  return useContext(CanvasContext);
}
