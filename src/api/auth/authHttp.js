import axios from 'axios';
import { getToken } from '../../utils';

export const authHttp = axios.create({
  baseURL: import.meta.env.VITE_API_MEMBER_BASEURL,
  timeout: 3000,
});

authHttp.defaults.withCredentials = false;

authHttp.interceptors.request.use(
  config => {
    const accessToken = getToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  error => Promise.reject(error),
);

authHttp.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const code = error.code;

    if (code === 'ECONNABORTED') {
    }

    return Promise.reject(error);
  },
);

export async function createPosts(url, content) {
  try {
    const { data } = await authHttp.post(url, content);
    return data;
  } catch (err) {
    return err;
  }
}
