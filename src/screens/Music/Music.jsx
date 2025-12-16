

import { useState } from 'react';
import MusicTile from './MusicTile';
import './Music.css';
import { useMusic } from './MusicStore.jsx';

export default function Music() {
  const [search, setSearch] = useState("");
  const { tracks } = useMusic();

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };

  // Filter tracks by search
  const filteredTracks = tracks.filter(
    t =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.artist.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="music-screen">
      <header className="music-header" style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
        <button className="icon-btn" onClick={handleBack} aria-label="Back" style={{ marginRight: 18 }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <span style={{ fontWeight: 700, fontSize: 28, color: '#fff', marginRight: 32 }}>Music</span>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <input
            type="text"
            placeholder="Search music..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: 320,
              maxWidth: '100%',
              padding: '10px 16px',
              borderRadius: 12,
              border: '1px solid #e0e0e0',
              fontSize: 16,
              outline: 'none',
              background: 'rgba(255,255,255,0.10)',
              color: '#222',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}
          />
        </div>
      </header>
      <div className="music-grid">
        {filteredTracks.length === 0 ? (
          <div style={{ color: '#fff', textAlign: 'center', width: '100%', fontSize: 18, opacity: 0.7, marginTop: 32 }}>No tracks found</div>
        ) : (
          filteredTracks.map((track, idx) => (
            <MusicTile key={track.title + track.artist + idx} {...track} />
          ))
        )}
      </div>
    </div>
  );
}
