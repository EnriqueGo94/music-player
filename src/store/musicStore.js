import { create } from 'zustand';

export const useMusicStore = create((set) => ({
  isPlaying: false,
  currentSongId: null,

  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentSongId: (songId) => set({ currentSongId: songId }),
}));
