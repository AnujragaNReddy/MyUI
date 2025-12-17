import React from "react";
import QuoteCanvasToolbar from "./QuoteCanvasToolbar";
import QuoteCanvasOptionsList from "./QuoteCanvasOptionsPanel/QuoteCanvasOptionsList";
import QuoteCanvas from "./QuoteCanvas";
import { QuotesProvider } from "./QuotesStore";
import { CanvasProvider } from "./CanvasStore";
import "./Quotes.css";

export default function QuoteLayout() {
  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <QuotesProvider>
      <CanvasProvider>
        <div className="quotes-layout-root">
          <div className="quotes-header-row">
            <button
              className="icon-btn quotes-back-btn"
              onClick={handleBack}
              aria-label="Back"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <span className="quotes-header-title">Quotes</span>
          </div>
          <div className="quotes-main-row">
            <div className="quotes-main-col quotes-main-col-toolbar">
              <QuoteCanvasToolbar />
            </div>
            <div className="quotes-main-col quotes-main-col-canvas">
              <QuoteCanvas />
            </div>
            <div className="quotes-main-col quotes-main-col-options">
              <QuoteCanvasOptionsList />
            </div>
          </div>
        </div>
      </CanvasProvider>
    </QuotesProvider>
  );
}
