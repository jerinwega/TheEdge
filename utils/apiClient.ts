import axios from 'axios';
import Constants from 'expo-constants';

const api = axios.create({
  baseURL: 'https://v3.football.api-sports.io/',
  headers: {
    'x-rapidapi-key': Constants.expoConfig?.extra?.RAPID_API_KEY,
    'x-rapidapi-host': 'v3.football.api-sports.io',
  },
});

export const fetchAPI = async (
  endpoint: string,
  params: Record<string, any> = {}
) => {
  try {
    const mergedParams = {
      timezone: 'Europe/London',
      ...params,
    };

    const response = await api.get(endpoint, { params: mergedParams });

    return response.data;
  } catch (error) {
    console.error(`API fetch error: ${endpoint}`, error);
    throw error;
  }
};
