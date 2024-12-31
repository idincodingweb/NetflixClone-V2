import React, { useEffect, useState } from 'react';
import axios from '../api/api'; // Gunakan instance axios dari api.js
import requests from '../api/requests'; // Gunakan requests.js
import '../assets/style/ContinueWatching.css'; // Pastikan path ini benar

const ContinueWatching = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchHorrorMovies = async () => {
      try {
        const response = await axios.get(requests.fetchHorrorMovies);
        const horrorMovies = response.data.results.slice(0, 10); // Ambil 10 film horor populer
        setMovies(horrorMovies);
      } catch (error) {
        console.error('Error fetching horror movies:', error);
      }
    };

    fetchHorrorMovies();
  }, []);

  // URL trailer YouTube yang diketahui untuk beberapa film horor populer
  const trailers = [
    'https://www.youtube.com/embed/pyWuHv2-Abk', // Contoh URL trailer 1
    'https://www.youtube.com/embed/52p1T9cSaUE', // Contoh URL trailer 2
    'https://www.youtube.com/embed/IqqfZHvCTNY', // Contoh URL trailer 3
    'https://www.youtube.com/embed/YzPq8uVgLe8', // Contoh URL trailer 4
    'https://www.youtube.com/embed/FrnZVrr7Mlw', // Contoh URL trailer 5
    'https://www.youtube.com/embed/76yBTNDB6vU', // Contoh URL trailer 6
    'https://www.youtube.com/embed/00ESTK8_sgA', // Contoh URL trailer 7
    'https://www.youtube.com/embed/Vfugwq2uoa0', // Contoh URL trailer 8
    'https://www.youtube.com/embed/RlfooqeZcdY', // Contoh URL trailer 9
    'https://www.youtube.com/embed/jWxTddSILd0', // Contoh URL trailer 10
  ];

  return (
    <div className="continue-watching">
      <h2>Continue Watching</h2>
      <div className="continue-watching-cards">
        {movies.map((movie, index) => (
          <div key={movie.id} className="card">
            <div className="iframe-container">
              <iframe
                src={trailers[index]}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={movie.title}
              ></iframe>
            </div>
            <div className="card-title">{movie.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;