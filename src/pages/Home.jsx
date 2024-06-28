import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => (
  <div>
    <h1>Welcome to My Portfolio</h1>
    <p>This is the home page of the portfolio.</p>
    <Link to="/projects">Projects</Link>
    <Link to="/resume">Resume</Link>
  </div>
);

export default Home;
