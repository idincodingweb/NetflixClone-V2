import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const TvShows = lazy(() => import('./pages/TvShows'));
const About = lazy(() => import('./pages/About'));
const DetailMovie = lazy(() => import('./components/DetailMovie'));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/about" element={<About />} />
          <Route path="/movie/:id" element={<DetailMovie />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;