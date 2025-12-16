import React, { useState } from 'react';
import './Music.css';
import playCircle from '../../assets/icons/play_circle.svg';
import pauseCircle from '../../assets/icons/pause_circle.svg';
import prevCircle from '../../assets/icons/arrow_circle_left.svg';
import nextCircle from '../../assets/icons/arrow_circle_right.svg';
import { useMusic } from './MusicStore.jsx';

export default function MusicPlayer() {
  const {
    currentTrack,
    playing,
    playNext,
    playPrev,
    pause,
    resume,
  } = useMusic();
  // For demo, static progress
  const progress = 0.35;
  const duration = currentTrack?.duration || '--:--';
  return (
    <div className="bottom-player">
      <div className="player-info">
        {currentTrack?.cover && (
          <img
            src={currentTrack.cover}
            alt={currentTrack.title + ' cover'}
            className="music-cover-img"
            style={{ width: 48, height: 48, minWidth: 48, minHeight: 48, marginRight: 16, position: 'static', borderRadius: 12, opacity: 1 }}
          />
        )}
        <span className="player-title">{currentTrack?.title || 'No track selected'}</span>
        <span className="player-artist">{currentTrack?.artist || ''}</span>
      </div>
      <div className="player-progress-container">
        <div className="player-progress-bar-bg">
          <div className="player-progress-bar-fg" style={{ width: `${progress * 100}%` }} />
        </div>
        <span className="player-duration">{duration}</span>
      </div>
      <div className="player-controls">
        <button className="icon-btn" aria-label="Previous" onClick={playPrev}>
          <img src={prevCircle} alt="Previous" style={{ width: 36, height: 36 }} />
        </button>
        <button
          className="icon-btn"
          aria-label={playing ? 'Pause' : 'Play'}
          onClick={playing ? pause : resume}
        >
          <img src={playing ? pauseCircle : playCircle} alt={playing ? 'Pause' : 'Play'} style={{ width: 36, height: 36 }} />
        </button>
        <button className="icon-btn" aria-label="Next" onClick={playNext}>
          <img src={nextCircle} alt="Next" style={{ width: 36, height: 36 }} />
        </button>
      </div>
    </div>
  );
}
