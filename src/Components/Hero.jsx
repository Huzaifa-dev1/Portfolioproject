// src/components/Hero.jsx
import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import image from './image.jpg' ; 

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        
        <div className="hero-text">
          <h1>Hello, I'm <span>MUHAMMAD HUZAIFA</span></h1>
          <h2>Frontend Developer | React Enthusiast</h2>
          <p>I create beautiful, responsive web applications using modern technologies like React.js, Tailwind, and more.</p>
          <Link to="/Project" className="hero-btn">View Projects</Link>
        </div>

        <div className="hero-image">
          <img src={image} alt="Profile" />
            </div>

      </div>
    </section>
  );
};

export default Hero;
