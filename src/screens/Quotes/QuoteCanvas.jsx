import React, { useRef, useEffect } from "react";
import "./Quotes.css";
import { useCanvas } from "./CanvasStore";

export default function QuoteCanvas() {
  const canvasRef = useRef(null);
  const { canvasState } = useCanvas();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    // Set canvas size
    canvas.width = 600;
    canvas.height = 400;
    // Fill background
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = canvasState.backgroundColor || "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Draw text
    ctx.font = `${canvasState.fontStyle || "normal"} ${
      canvasState.fontWeight || "normal"
    } ${canvasState.fontSize || 32}px ${canvasState.fontFamily || "Arial"}`;
    ctx.fillStyle = canvasState.textColor || "#222";
    ctx.textAlign = canvasState.textAlign || "center";
    ctx.textBaseline = "middle";
    ctx.shadowColor =
      canvasState.textShadow !== "none" ? "#000" : "transparent";
    ctx.shadowBlur = canvasState.textShadow !== "none" ? 4 : 0;
    ctx.lineWidth = 1;
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.fillText(canvasState.text, 0, 0);
    ctx.restore();
    // TODO: Draw icons, emojis, stickers, borders, etc.
  }, [canvasState]);

  return (
    <div className="quotes-canvas-container">
      <div className="quotes-canvas-area-wrapper">
        <canvas
          ref={canvasRef}
          className="quotes-canvas-area"
          style={{ width: "100%", height: "100%", display: "block" }}
        />
      </div>
    </div>
  );
}
