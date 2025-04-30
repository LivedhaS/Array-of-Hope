import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Array of Hope</h1>
        <p className="home-subtitle">Student Team Members Management App</p>

        <div className="home-buttons">
          <Link to="/add">
            <button className="home-button">Add Member</button>
          </Link>
          <Link to="/view">
            <button className="home-button">View Members</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
