import axios, { AxiosRequestConfig } from 'axios';
import { store } from '../store';
import { API_LINK } from './constants';

const headers = {
  'Content-type': 'application/json',
};
const axiosCfg: AxiosRequestConfig = {
  baseURL: API_LINK,
  headers: headers,
};
export const api = axios.create(axiosCfg);

api.interceptors.request.use((axiosCfg) => {
  try {
    const token = store.getState().user.token;
    console.log(token);
    axiosCfg.headers!.Authorization = `${token}`;
    return axiosCfg;
  } catch {
    axiosCfg.headers!.Authorization = ``;
    return axiosCfg;
  }
});
