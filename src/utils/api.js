import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: `Client-ID gnRdm4Sz-Ul2rPJ37lTnjt94Qznw12N8iaxMaPuCKOk`,
  },
});

export default api;
