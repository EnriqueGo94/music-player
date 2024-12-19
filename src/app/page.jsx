'use client';
import styles from '~/styles/index/page.module.css';
import { useSearchStore } from '~/store/searchStore';
import SongList from '~/components/SongList';
import MusicPlayer from '~/components/MusicPlayer';
import { useState } from 'react';

export default function Home() {
  const searchTerm = useSearchStore((state) => state.searchedTerm);
  const [selectedSong, setSelectedSong] = useState({}); // Estado de la canción seleccionada

  const handleSongSelect = (song) => {
    setSelectedSong(song);
  };

  return (
    <div className={styles.mainContainer}>
      <SongList searchQuery={searchTerm} onSongSelected={handleSongSelect} />
      <MusicPlayer
        audioSrc={selectedSong.preview || null}
        albumCover={selectedSong.album ? selectedSong.album.cover_small : null}
        songTitle={selectedSong.title_short || null}
        artistName={selectedSong.artist ? selectedSong.artist.name : null}
      />
    </div>
  );
}
