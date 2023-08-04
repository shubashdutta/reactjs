// Disclaimer.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Disclaimer.css';

const Disclaimer = () => {
  return (
    <div className="main-container disclaimer">
      <h1 className="main-heading">OUR WORK</h1>
      <div className="sub-container">
        <div className="left-container">
          <div className="disclaimer-container">
            <h2>About TURST</h2>
            <ul>
              {/* Points about your website go here */}
              <li>
                <Link to="/aboutus" state={{ point: 'vision' }} className="custom-link">Our Vision</Link>
              </li>
              <li>
                <Link to="/aboutus" state={{ point: 'mission' }} className="custom-link">Our Mission</Link>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="center-container">
          <h2>WHY EDUCATION</h2>
          <ul>
            {/* Points about your website go here */}
            <li>
              <Link to="/education" state={{ point: 'vision' }} className="custom-link">Importance of Child Rights</Link>
            </li>
            <li>
              <Link to="/education" state={{ point: 'mission' }} className="custom-link">Importance of education for children</Link>
            </li>
            <li>
              <Link to="/education" state={{ point: 'team' }} className="custom-link">Education for Poor Children</Link>
            </li>
          </ul>
        </div>
        <div className="right-container">
          <h2>WHY HEALTH</h2>
          <ul>
            {/* Points about your website go here */}
            <li>
              <Link to="/health" state={{ point: 'vision' }} className="custom-link">Health and its importance</Link>
            </li>
            
            <li>
              <Link to="/health" state={{ point: 'team' }} className="custom-link">Why health equity?</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* New section for social media links and logos */}
      <div className="social-media">
        <h3>Follow us on social media:</h3>
        <div className="social-links">
          <ul>
          <a href="https://www.facebook.com/profile.php?id=100091971297357" target="_blank" rel="noopener noreferrer">
            <img src="https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg?w=740" alt="Facebook" />
          </a>
          </ul>
          <ul>
          <a href="https://example.com/twitter" target="_blank" rel="noopener noreferrer">
            <img src="https://img.freepik.com/premium-psd/social-media-icon-twitter-3d_494952-1233.jpg?w=740" alt="Twitter" />
          </a>
          </ul>
          <ul>
          <a href="https://example.com/instagram" target="_blank" rel="noopener noreferrer">
            <img src="https://img.freepik.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.jpg?w=740&t=st=1690182449~exp=1690183049~hmac=701db9165d39e82fb22647f2d0e9f8b27a083cbe763bf04bcd89048222497cb6" alt="Instagram" />
          </a>
          </ul>
          {/* Add more social media links and logos as needed */}
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
