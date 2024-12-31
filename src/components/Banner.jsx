import React, { useEffect, useState } from 'react';
import axios from '../api/api'; // Gunakan instance axios dari api.js
import requests from '../api/requests'; // Gunakan requests.js
import '../assets/style/Banner.css';
import { FaShareAlt, FaHeart, FaComment } from 'react-icons/fa'; // Import ikon dari react-icons

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        const randomMovie =
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ];
        setMovie(randomMovie);
      } catch (error) {
        console.error("Error fetching the banner movie: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="banner">
      <div className="movie_card" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}>
        <div className="info_section">
          <div className="movie_header">
            <img
              className="locandina"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title || movie.name || movie.original_name}
            />
            <h1>{movie.title || movie.name || movie.original_name}</h1>
            <h4>{movie.release_date ? movie.release_date.substring(0, 4) : ''}, {movie.vote_average}</h4>
            <span className="minutes">{movie.runtime} min</span>
            <p className="type">
              {movie.genres && movie.genres.map(genre => genre.name).join(', ')}
            </p>
          </div>
          <div className="movie_desc">
            <p className="text">{movie.overview}</p>
          </div>
          <div className="movie_social">
            <ul>
              <li><FaShareAlt /></li>
              <li><FaHeart /></li>
              <li><FaComment /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;