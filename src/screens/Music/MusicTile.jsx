
import "./Music.css";
import { useState } from "react";
import playCircle from '../../assets/icons/play_circle.svg';
import pauseCircle from '../../assets/icons/pause_circle.svg';
import { useMusic } from './MusicStore.jsx';
import { useMemo } from 'react';

export default function MusicTile({ title, artist, duration, isAlbum, cover }) {
  const { tracks, currentTrackIdx, playing, playTrack, pause } = useMusic();
  // Find this track's index in the tracks array
  const idx = useMemo(() => tracks.findIndex(t => t.title === title && t.artist === artist), [tracks, title, artist]);
  const isCurrent = idx === currentTrackIdx;

  const handleClick = () => {
    if (isCurrent) {
      if (playing) pause();
      else playTrack(idx);
    } else {
      playTrack(idx);
    }
  };

  return (
    <div className={"music-tile" + (isCurrent ? " playing" : "")}>
      <div className="cover" style={{ position: 'relative', overflow: 'hidden' }}>
        {cover && (
          <img
            src={cover}
            alt={title + ' cover'}
            className="music-cover-img"
          />
        )}
        <button className="icon-btn" aria-label={isCurrent && playing ? "Pause" : "Play"} onClick={handleClick} style={{ position: 'relative', zIndex: 1 }}>
          <img
            src={isCurrent && playing ? pauseCircle : playCircle}
            alt={isCurrent && playing ? 'Pause' : 'Play'}
            style={{ width: 36, height: 36 }}
          />
        </button>
      </div>

      <div className="tile-footer">
        <div className="song-info">
          <span className="title">{title}</span>
          <span className="artist">{artist}</span>
        </div>

        {!isAlbum && <span className="duration">{duration}</span>}
      </div>
    </div>
  );
}
