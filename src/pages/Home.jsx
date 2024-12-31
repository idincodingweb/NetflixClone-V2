import React from 'react';
import Banner from '../components/Banner';
import ContinueWatching from '../components/ContinueWatching';
import TrendingNow from '../components/TrendingNow';
import Movies from '../components/Movies'

const Home = () => {
  return (
    <div>
      <Banner />
      <ContinueWatching />
      <TrendingNow />
      <Movies />
    </div>
  );
};

export default Home;