'use client';
import { useEffect, useState } from 'react';
import { fetchSongs } from '~/api/deezer';
import styles from '~/styles/song-list/song-list.module.css';

import PlayCircleOutlineTwoToneIcon from '@mui/icons-material/PlayCircleOutlineTwoTone';

export default function SongList({ searchQuery = 'eminem' }) {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchQuery) {
      const getSongs = async () => {
        try {
          const songList = await fetchSongs(searchQuery);

          if (!Array.isArray(songList)) {
            setError(`Failed to load songs: ${songList.message}`);
          } else {
            setSongs(songList);
          }
        } catch (err) {
          setError(`Failed to load songs: ${err}`);
        }
      };

      getSongs();
    }
  }, [searchQuery]);

  return (
    <div>
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
        {/*TODO añadir loadings para cuando se esté realizando la búsuqeda*/}
        {songs.map((song) => (
          <div
            key={song.id}
            className={styles.songListItem}
            style={
              song.album.cover_medium
                ? { backgroundImage: `url(${song.album.cover_medium})` }
                : {}
            }
          >

            <div className={styles.playIconContainer}>
              <PlayCircleOutlineTwoToneIcon/>
            </div>
            <div className={styles.songListItemContent}>
              <p className={styles.songTitle}>{song.title}</p>
              <p className={styles.songArtist}>{song.artist.name}</p>
              <p className={styles.songAlbum}>{song.album.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
