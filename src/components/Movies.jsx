import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/api'; // Gunakan instance axios dari api.js
import requests from '../api/requests'; // Gunakan requests.js
import '../assets/style/Movies.css'; // Pastikan path ini benar
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faEye, faStar, faArrowRight, faCheck, faFilm } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const categories = ["Action", "Crime", "Comedy", "Adventure", "Biography", "Animation", "Documentary", "Fantasy"];

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(requests.fetchPopularMovies, {
          params: { page: 1 } // Ambil halaman pertama saja
        });
        setMovies(response.data.results.slice(0, 20)); // Batasi hanya 20 film
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="movies">
      <div className="movies-header">
        <div className="movies-icon">
          <FontAwesomeIcon icon={faFilm} className="movies-icon-film" />
          <span>Movies</span>
        </div>
        <nav className="movies-nav">
          <button className="movies-nav-item">
            <FontAwesomeIcon icon={faYoutube} /> <span> Series </span>
          </button>
          <button className="movies-nav-item">
            <FontAwesomeIcon icon={faCheck} /><span>Original Series</span>
          </button>
          <div className="movies-search">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="Search..." />
          </div>
        </nav>
      </div>
      <hr className="movies-divider" />
      <div className="movies-categories">
        {categories.map((category, index) => (
          <button key={index} className="movies-category-button">{category}</button>
        ))}
        <FontAwesomeIcon icon={faArrowRight} className="movies-categories-scroll-icon" />
      </div>
      <div className="movies-cards-container">
        <div className="movies-cards">
          {movies.map((movie, index) => (
            <div 
              key={movie.id} 
              className="movies-card" 
              onClick={() => handleCardClick(movie.id)}
            >
              <img
                className="movies-card-image"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="movies-card-info">
                <span className="movies-card-year">{new Date(movie.release_date).getFullYear()}</span>
                <div className="movies-card-icons">
                  <FontAwesomeIcon icon={faHeart} className="movies-love-icon" />
                  <FontAwesomeIcon icon={faEye} className="movies-eye-icon" />
                </div>
                <div className="movies-card-rating">
                  <FontAwesomeIcon icon={faStar} className="movies-star-icon" />
                  <span>{movie.vote_average}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;