import "../../App.css";
import React from "react";
import { useNavigate } from "react-router-dom";

let menuOptions = [
  { label: "Books", icon: "📚" },
  { label: "Chat", icon: "💬" },
  { label: "Movies", icon: "🎬" },
  { label: "Music", icon: "🎵" },
  { label: "Quotes", icon: "💡" },
  { label: "Wallpapers", icon: "🖼️" },
];
// Sort alphabetically by label
menuOptions = menuOptions.sort((a, b) => a.label.localeCompare(b.label));

function Dashboard({ onLogout }) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: "100vh",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "stretch",
        justifyContent: "stretch",
        background: "none",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      {/* Side Menu */}
      <aside
        style={{
          width: 140,
          background: "rgba(255,255,255,0.13)",
          borderRadius: 0,
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2.5rem 0",
          gap: 18,
          backdropFilter: "blur(18px) saturate(160%)",
          borderRight: "1.5px solid rgba(255,255,255,0.18)",
          minHeight: "100vh",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {menuOptions.map((opt) => (
          <button
            key={opt.label}
            style={{
              width: 80,
              height: 80,
              margin: "0 0 18px 0",
              border: "none",
              borderRadius: 22,
              background: "linear-gradient(145deg, #e0e0e0 0%, #f5f5f5 100%)",
              boxShadow:
                "0 6px 18px 0 rgba(31, 38, 135, 0.18), 0 2px 8px #fff inset",
              color: "#222831",
              fontSize: 32,
              fontWeight: 700,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "transform 0.15s, box-shadow 0.15s",
              outline: "none",
            }}
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "scale(0.95)")
            }
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={() => {
              if (opt.label === "Chat") navigate("/chat");
              if (opt.label === "Books") navigate("/books");
              if (opt.label === "Music") navigate("/music");
              if (opt.label === "Quotes") navigate("/quotes");
              if (opt.label === "Movies") navigate("/movies");
              if (opt.label === "Wallpapers") navigate("/wallpapers");
            }}
          >
            <span>{opt.icon}</span>
            <span style={{ fontSize: 15, fontWeight: 600, marginTop: 6 }}>
              {opt.label}
            </span>
          </button>
        ))}
      </aside>
      {/* Main Card */}
      <div
        className="glass-card"
        style={{
          flex: 1,
          minWidth: 0,
          padding: "3.5rem 4.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          maxWidth: "100vw",
          height: "100vh",
          borderRadius: 0,
          overflow: "hidden",
        }}
      >
        <h1>Dashboard</h1>
        <p>
          Welcome to your dashboard! This page uses the same glassmorphism
          theme.
        </p>
        <button
          onClick={onLogout}
          style={{
            marginTop: 32,
            background: "linear-gradient(145deg, #e0e0e0 0%, #f5f5f5 100%)",
            border: "none",
            borderRadius: 18,
            boxShadow:
              "0 6px 18px 0 rgba(31, 38, 135, 0.18), 0 2px 8px #fff inset",
            color: "#222831",
            fontSize: 22,
            fontWeight: 700,
            padding: "1rem 3rem",
            cursor: "pointer",
            transition: "transform 0.15s, box-shadow 0.15s",
            outline: "none",
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.96)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
