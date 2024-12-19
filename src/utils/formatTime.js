/**
 * Convierte un tiempo en segundos a formato mm:ss
 * @param {number} seconds - El tiempo en segundos
 * @returns {string} - El tiempo formateado en minutos y segundos (mm:ss)
 */

export function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return '0:00';

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}
