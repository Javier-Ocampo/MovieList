import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'e05a5e7afaf37fd6acc23c1645f12fcf',
    language: 'en-US',
  },
});

export default movieDB;
