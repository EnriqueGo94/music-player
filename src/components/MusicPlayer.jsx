'use client';
import React, { useRef, useState, useEffect } from 'react';
import styles from '~/styles/music-player/music-player.module.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeDownOutlinedIcon from '@mui/icons-material/VolumeDownOutlined';
import {formatTime} from '~/utils/formatTime';

export default function MusicPlayer({
  audioSrc,
  albumCover,
  songTitle,
  artistName,
}) {
  const audioRef = useRef(null); // Referencia al elemento <audio>
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0); // Tiempo actual de reproducción
  const [duration, setDuration] = useState(0); // Duración total de la canción
  const [isSeeking, setIsSeeking] = useState(false); // Estado para bloquear actualización
  const [volume, setVolume] = useState(1); // Volumen inicial

  useEffect(() => {
    if (audioRef.current && audioSrc) {
      audioRef.current.load(); // Carga la nueva pista
      audioRef.current.play(); // Reproduce la pista automáticamente
      setIsPlaying(true); // Actualiza el estado
    }
  }, [audioSrc]);

  // Actualiza el progreso del audio
  const handleTimeUpdate = () => {
    if (!isSeeking) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // Maneja la carga de metadatos (duración del audio)
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  // Reproduce o pausa el audio
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Maneja el inicio del arrastre de la barra
  const handleSeekStart = () => {
    setIsSeeking(true); // Bloquea actualizaciones automáticas
  };

  // Actualiza la barra mientras el usuario mueve el slider
  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * duration;
    setCurrentTime(newTime); // Actualiza visualmente la barra
  };

  // Aplica el tiempo final al soltar el slider
  const handleSeekEnd = (e) => {
    const newTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    setIsSeeking(false);
  };

  // Maneja el cambio de volumen
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  return (
    <div
      className={`${styles.playerContainer} ${audioSrc ? styles.playerContainerShow : ''}`}
    >
      <div className={styles.playerContent}>
        <div className={styles.songInfo}>
          <div
            className={styles.coverSong}
            style={albumCover ? { backgroundImage: `url(${albumCover})` } : {}}
          ></div>
          <div className={styles.songText}>
            <p className={styles.songTitle}>{songTitle || 'Unknown Title'}</p>
            <p className={styles.artistName}>{artistName || 'Unknown Title'}</p>
          </div>
        </div>

        <div className={styles.controls}>
          <button onClick={togglePlayPause} className={styles.playPauseButton}>
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </button>
          <div className={styles.progressContainer}>
            <p className={styles.songTime}>{formatTime(currentTime)}</p>
            <input
              type="range"
              min="0"
              max="100"
              value={(currentTime / duration) * 100 || 0} // Tiempo actual
              onMouseDown={handleSeekStart} // Inicia arrastre
              onChange={handleProgressChange} // Movimiento
              onMouseUp={handleSeekEnd} // Finaliza arrastre
              className={styles.progressBar}
            />
            <p className={styles.songTime}>{formatTime(duration)}</p>
          </div>
        </div>

        <div className={styles.volumeControl}>
          <VolumeDownOutlinedIcon />
          <input
            type="range"
            min="0"
            max="100"
            value={volume * 100}
            onChange={handleVolumeChange}
            className={styles.volumeBar}
          />
        </div>
        {audioSrc && (
          <audio
            ref={audioRef}
            src={audioSrc}
            onTimeUpdate={handleTimeUpdate} // Actualiza la barra de progreso automáticamente
            onLoadedMetadata={handleLoadedMetadata} // Captura la duración
          ></audio>
        )}
      </div>
    </div>
  );
}
