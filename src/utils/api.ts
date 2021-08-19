import axios, {AxiosResponse} from 'axios';
import {PostType} from '../models/post.interface';

const instance = axios.create({
  baseURL: 'https://covid-api.mmediagroup.fr/v1',
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
  put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

export const covidApi = {
  getCase: (): Promise<any> => requests.get('/cases'),
};
