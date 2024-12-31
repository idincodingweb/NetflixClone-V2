import axios from 'axios';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmU2YjgzNjllM2FjMjhjNzNjMjdhM2U4ZjRmZTZmYSIsIm5iZiI6MTczMzA3MTUyOC40MzYsInN1YiI6IjY3NGM5MmE4YjU1NDdhZDk4MDdjZTIzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IS9vCwIb2SFSM1Hvt_KVjbuzNaylviOxp9LXkz3L9No';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
});

export default instance;
