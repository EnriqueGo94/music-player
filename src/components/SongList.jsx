'use client';
import { useEffect, useState } from 'react';
import { fetchSongs } from '~/api/deezer';
import styles from '~/styles/song-list/song-list.module.css';

import PlayCircleOutlineTwoToneIcon from '@mui/icons-material/PlayCircleOutlineTwoTone';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import { useMusicStore } from '~/store/musicStore';

export default function SongList({ searchQuery = 'eminem', onSongSelected }) {

  const { isPlaying, currentSongId, setIsPlaying } = useMusicStore();


  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      const getSongs = async () => {
        setLoading(true);
        try {
          const songList = await fetchSongs(searchQuery);

          if (!Array.isArray(songList)) {
            setError(`Failed to load songs: ${songList.message}`);
          } else {
            setSongs(songList);
          }
        } catch (err) {
          setError(`Failed to load songs: ${err}`);
        } finally {
          setLoading(false);
        }
      };

      getSongs();
    }
  }, [searchQuery]);

  const handleSongClick = (song) => {
    if (currentSongId === song.id) {
      setIsPlaying(!isPlaying); // Reanuda o pausa la canción actual
    } else {
      // Notificar al padre para cargar la nueva canción
      onSongSelected(song);
    }

  };

  return (
    <div style={{marginBottom: '120px'}}>
      {searchQuery ? (
        <div className={styles.searchTermContainer}>
          <p className={styles.searchTermContainerTitle}>Search results for:</p>
          <p className={styles.searchTermContainerTherm}>
            {searchQuery || 'No search term entered'}
          </p>
        </div>
      ) : (
        <div style={{ height: '37px' }}></div>
      )}
      {error && <p>{error}</p>}
      <div className={styles.songListContainer}>
        {loading ? (
          [...Array(6)].map((_, index) => (
            <div key={index} className={styles.songListItemLoading}>
              <div className={styles.songListItemLoadingContent}></div>
              <div
                className={`${styles.songListItemLoadingContent} ${styles.small}`}
              ></div>
            </div>
          ))
        ) : songs.length > 0 ? (
          songs.map((song) => (
            <div
              key={song.id}
              className={`${styles.songListItem} ${currentSongId === song.id && isPlaying ? styles.activeSong : ''}`}
              style={
                song.album.cover_medium
                  ? { backgroundImage: `url(${song.album.cover_medium})` }
                  : {}
              }
              onClick={() => handleSongClick(song)}
            >
              <div
                className={`${styles.playIconContainer} 
                ${currentSongId === song.id && isPlaying ? styles.activeSong : ''}`}
              >
                <PlayCircleOutlineTwoToneIcon />
              </div>
              <div className={styles.songListItemContent}>
                <p className={styles.songTitle}>{song.title}</p>
                <p className={styles.songArtist}>{song.artist.name}</p>
                <p className={styles.songAlbum}>{song.album.title}</p>
              </div>
            </div>
          ))
        ) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <MusicOffIcon />
            <p>There are no songs to show</p>
          </div>
        )}
      </div>
    </div>
  );
}
