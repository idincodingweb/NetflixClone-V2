import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/api';
import '../assets/style/DetailMovie.css';
import ReactPlayer from 'react-player';

const DetailMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(`/movie/${id}`, {
          params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY, // Ganti dengan API key TMDb Anda
            language: 'en-US',
            append_to_response: 'videos', // Append videos to get trailer URLs
          },
        });
        setMovie(request.data);
      } catch (error) {
        console.error('Error fetching movie details: ', error);
      }
    };

    fetchData();
  }, [id]);

  const getTrailerUrl = () => {
    const trailer = movie.videos?.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
    return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : '';
  };

  return (
    <div className="detail-card">
      <div className="detail-card-left">
        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title || movie.name} />
      </div>
      <div className="detail-card-right">
        <h1>{movie.title || movie.name}</h1>
        <div className="detail-card-right__details">
          <ul>
            <li>{movie.release_date ? movie.release_date.substring(0, 4) : ''}</li>
            <li>{movie.runtime} min</li>
            <li>{movie.genres && movie.genres.map((genre) => genre.name).join(', ')}</li>
          </ul>
        </div>
        <div className="detail-card-right__rating">
          <div className="detail-card-right__rating__stars">
            <fieldset className="rating">
              <input id="star10" name="rating" type="radio" value="10" />
              <label className="full" htmlFor="star10" title="10 stars"></label>
              <input id="star9half" name="rating" type="radio" value="9 and a half" />
              <label className="half" htmlFor="star9half" title="9.5 stars"></label>
              {/* Add more star ratings as needed */}
            </fieldset>
          </div>
        </div>
        <div className="detail-card-right__review">
          <p>{movie.overview}</p>
          <a href={`https://www.imdb.com/title/${movie.imdb_id}/plotsummary?ref_=tt_stry_pl`} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </div>
        <div className="detail-card-right__button">
          <button onClick={() => setShowTrailer(true)}>WATCH TRAILER</button>
        </div>
      </div>
      {showTrailer && (
        <div className="trailer-popup">
          <div className="trailer-popup-content">
            <span className="close-button" onClick={() => setShowTrailer(false)}>&times;</span>
            <ReactPlayer url={getTrailerUrl()} playing controls />
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailMovie;