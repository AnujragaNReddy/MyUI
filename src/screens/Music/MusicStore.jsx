import { createContext, useContext, useState } from 'react';

const MusicContext = createContext();

export function MusicProvider({ children, tracks }) {
  const [currentTrackIdx, setCurrentTrackIdx] = useState(null);
  const [playing, setPlaying] = useState(false);

  const playTrack = idx => {
    setCurrentTrackIdx(idx);
    setPlaying(true);
  };
  const pause = () => setPlaying(false);
  const resume = () => setPlaying(true);
  const playNext = () => {
    if (tracks && tracks.length > 0 && currentTrackIdx !== null) {
      setCurrentTrackIdx((currentTrackIdx + 1) % tracks.length);
      setPlaying(true);
    }
  };
  const playPrev = () => {
    if (tracks && tracks.length > 0 && currentTrackIdx !== null) {
      setCurrentTrackIdx((currentTrackIdx - 1 + tracks.length) % tracks.length);
      setPlaying(true);
    }
  };

  return (
    <MusicContext.Provider value={{
      tracks,
      currentTrackIdx,
      currentTrack: tracks && currentTrackIdx !== null ? tracks[currentTrackIdx] : null,
      playing,
      playTrack,
      pause,
      resume,
      playNext,
      playPrev
    }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  return useContext(MusicContext);
}
