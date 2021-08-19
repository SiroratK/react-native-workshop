import axios from 'axios';

export const baseURL = 'https://covid-api.mmediagroup.fr/v1';
export const client = axios.create({
  baseURL,
});

export const setTokenToAxios = token =>
  (client.defaults.headers.Authorization = `Bearer ${token}`);
