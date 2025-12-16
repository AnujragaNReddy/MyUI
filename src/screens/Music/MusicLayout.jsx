import React from 'react';
import './Music.css';
import Music from './Music';
import MusicPlayer from './MusicPlayer';
import { MusicProvider } from './MusicStore.jsx';

const tracks = [
  {
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    duration: '3:20',
    isAlbum: false,
    cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=facearea&w=400&h=400',
  },
  {
    title: 'Random Access Memories',
    artist: 'Daft Punk',
    isAlbum: true,
    cover: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400',
  },
  {
    title: 'Levitating',
    artist: 'Dua Lipa',
    duration: '3:23',
    isAlbum: false,
    cover: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400',
  },
  {
    title: 'After Hours',
    artist: 'The Weeknd',
    duration: '4:00',
    isAlbum: false,
    cover: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&h=400',
  },
];

export default function MusicLayout() {
  return (
    <MusicProvider tracks={tracks}>
      <div className="music-layout">
        <Music />
        <MusicPlayer />
      </div>
    </MusicProvider>
  );
}
