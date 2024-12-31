import React, { useEffect, useState } from 'react';
import axios from '../api/api'; // Menggunakan instance axios dari api.js
import requests from '../api/requests'; // Menggunakan requests.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlay, faShareAlt, faVolumeUp, faClock } from '@fortawesome/free-solid-svg-icons';
import '../assets/style/Banner.css'; // Pastikan path ini benar

const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(requests.fetchPopularMovies);
        const movies = response.data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        setMovie(randomMovie);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    fetchPopularMovies();
  }, []);

  if (!movie) return null;

  // Gunakan durasi fiktif jika durasi sebenarnya tidak tersedia atau tidak valid
  const duration = movie.runtime ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m` : '2h 30m';

  return (
    <header className="banner" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}>
      <div className="banner-contents">
        <h1 className="banner-title">{movie.title || movie.name || movie.original_name}</h1>
        <div className="banner-rating">
          <div className="banner-review">
            {movie.overview && movie.overview.split(' ').slice(0, 15).join(' ') + '...'}
          </div>
          <div className="banner-stars">
            <FontAwesomeIcon icon={faStar} /> {movie.vote_average}
          </div>
        </div>
      </div>
      <div className="banner-buttons">
        <div className="banner-buttons-left">
          <button className="banner-button">
            <FontAwesomeIcon icon={faPlay} /> Play Now
          </button>
          <button className="banner-button">
            <FontAwesomeIcon icon={faShareAlt} /> Share
          </button>
        </div>
        <div className="banner-buttons-right">
          <div className="banner-info">
            <FontAwesomeIcon icon={faVolumeUp} /> Subtitles
          </div>
          <div className="banner-info">
            <FontAwesomeIcon icon={faClock} /> {duration}
          </div>
        </div>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
};

export default Banner;