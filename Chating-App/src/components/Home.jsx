import React from 'react';
import './Home.css';
import backgroundImage from './bgpic.jpg';

const Home = () => {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>Welcome to the Chat App!</h1>
    </div>
  );
};

export default Home;
