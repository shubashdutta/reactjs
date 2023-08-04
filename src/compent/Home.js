import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your custom CSS for styling
import Navbar from './Navbar';
import AnimationBoxes from './AnimationBoxes'; // Import the AnimationBoxes component
import "../App.css";
import Disclaimer from './Disclaimer';

const Home = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div className="slider-with-content-container">
        <div className="image-box-container">
          <div className="image-box">
            <img src="/image/home.jpg" alt="sai baba 4" />
          </div>
        </div>
        <div className="content-box">
        <div className="text-box">
        <p style={{
          textAlign: 'left',
          backgroundImage: 'linear-gradient(45deg, #007bff, #00cc66, #ff6600, #9900cc, #ff0000, #ffcc00)', // Replace with your desired gradient colors
          WebkitBackgroundClip: 'text', // To apply the gradient as text color on WebKit browsers
          WebkitTextFillColor: 'transparent', // To make the text transparent
        }}>
          We strive to assist those in need, providing support for education, health, shelter, and food. Our mission is to make a positive impact and uplift communities, fostering a better future for all.
          <span className="highlighted"> To </span>
          <span className="highlighted">Help Someone Donate HERE ?</span> 
        </p>
        <div className="heart-button-container">
  <Link to="/donate" className="heart-button">Yes I wanted To Help</Link>
</div>
      </div>
        </div>
      </div>

      <h2 className="Abot">What We Do ?</h2>
      <div className="animation-boxes-container">
        <AnimationBoxes />
      </div>
      <Disclaimer/>
    
    </div>
  );
};

export default Home;
