import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="text-center bg-light py-5 hero-section">
      <div className="container">
        <h1>Welcome to Sweet Cafe</h1>
        <p className="lead">
          The Best Place for Sweet Moments & Delicious Food!
        </p>
        <a href="#menu" className="btn btn-primary">
          Explore Our Menu
        </a>
      </div>
    </section>
  );
};

export default Hero;
