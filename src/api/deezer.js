import axios from 'axios';

const API_URL = 'https://deezerdevs-deezer.p.rapidapi.com/search';
const API_KEY = process.env.NEXT_PUBLIC_RAPIDAPI_KEY;
const API_HOST = process.env.NEXT_PUBLIC_RAPIDAPI_HOST;

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
