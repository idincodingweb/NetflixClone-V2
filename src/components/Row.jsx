import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api/api';
import '../assets/style/Row.css';
import LazyLoad from 'react-lazyload';

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results.slice(0, 10)); // Batasi hanya 10 film
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="custom-row">
      <h2>{title}</h2>
      <div className="custom-row__posters">
        {movies.map(movie => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
            <LazyLoad height={isLargeRow ? 250 : 100} offset={100}>
              <img
                className={`custom-row__poster ${isLargeRow && "custom-row__posterLarge"}`}
                src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name || movie.title}
              />
            </LazyLoad>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Row;