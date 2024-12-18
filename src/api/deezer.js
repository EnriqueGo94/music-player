import axios from 'axios';

const API_URL = 'https://deezerdevs-deezer.p.rapidapi.com/search';
const API_KEY = '1a82feef2cmshe9ca5833b261e2ep17ae2cjsn1cb09defbdc3';
const API_HOST = 'deezerdevs-deezer.p.rapidapi.com';

export const fetchSongs = async (query, type = 'track') => {
  try {
    const response = await axios.get(API_URL, {
      params: { q: query },
      headers: {
        'x-rapidapi-host': API_HOST,
        'x-rapidapi-key': API_KEY,
      },
    });

    if (!response.data.hasOwnProperty('error')) {
      return response.data.data.filter((item) => item.type === type);
    } else {
      return response.data.error;
    }
  } catch (error) {
    console.error('Error fetching songs:', error);
    throw error;
  }
};
