import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/api'; // Gunakan instance axios dari api.js
import requests from '../api/requests'; // Gunakan requests.js
import '../assets/style/TrendingNow.css'; // Pastikan path ini benar

const TrendingNow = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(requests.fetchHorrorMovies); // Ambil film horor
        setMovies(response.data.results.slice(0, 8)); // Ambil 8 film horor
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
    <div className="trending-now">
      <div className="trending-now-header">
        <div className="trending-icon">
          <i className="fas fa-fire trending-icon-arrow"></i>
          <span>Trends Now</span>
        </div>
        <nav className="trending-nav">
          <button className="trending-nav-item active">
            <i className="fas fa-star"></i> Popular
          </button>
        </nav>
      </div>
      <hr className="trending-divider" />
      <div className="trending-cards">
        {movies.map((movie) => (
          <div 
            key={movie.id} 
            className="trending-card" 
            onClick={() => handleCardClick(movie.id)}
          >
            <img
              className="trending-card-image"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="trending-card-info">
              <span className="trending-card-year">{new Date(movie.release_date).getFullYear()}</span>
              <div className="trending-card-icons">
                <i className="fas fa-heart trending-love-icon"></i>
                <i className="fas fa-eye trending-eye-icon"></i>
              </div>
              <div className="trending-card-rating">
                <i className="fas fa-star trending-star-icon"></i>
                <span>{movie.vote_average}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNow;