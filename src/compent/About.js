// src/components/About.js

import React from 'react';
import './About.css';
import Navbar from './Navbar';
import Disclaimer from './Disclaimer';
import Mission from './Mission';

const About = () => {
  return (
    <div className="about-container">
      <nav>
        <Navbar />
      </nav>
      <h1 className="about-heading">About Us</h1>
      <div className="about-content">
        <p>
        At Sai Baba Seva Sadan Trust, we are a non-profit organization dedicated to spreading the teachings and principles of Shirdi Sai Baba. Our trust was founded with a profound commitment to serve humanity and promote love, peace, and compassion. Inspired by the divine teachings of Sai Baba, we endeavor to create a world where everyone is treated with kindness and empathy. Our journey began with the noble vision of making a positive impact on the lives of individuals from all walks of life. We believe in the power of selfless service and the transformative potential of collective efforts. As followers of Sai Baba, we strive to emulate his ideals and principles of selflessness, love, and unity in diversity. Our mission is to carry forward the legacy of Sai Baba and continue his divine work. We envision a society where every individual is cared for, irrespective of their background or circumstances. By serving the less fortunate and empowering the underprivileged, we aim to create a more equitable and compassionate world. Since our inception, we have been committed to serving humanity in diverse ways, addressing various social issues and challenges. Our initiatives encompass a wide range of humanitarian services, touching the lives of individuals across different age groups, genders, and communities.
        </p>
        <div className="image-container">
          <div className="centered-text-container">
            <h1 className="image-heading">Our Vision</h1>
            <div className="grid-box">
              <p>
                A happy, healthy, and creative child whose rights are protected and honored in society.
              </p>
              <p>
                A society that is built on respect for dignity, justice, and equity for all.
              </p>
              
            </div>
          <img src="https://st.depositphotos.com/16337376/56579/i/450/depositphotos_565791206-stock-photo-group-of-happy-smiling-village.jpg" alt="About Us" className="about-image" />
          </div>
        </div>
      </div>
      
      <h2 className="mission">Our Mission?</h2>
      <div className="mission-boxes-container">
        <Mission />
      </div>
    
      <Disclaimer />
    </div>
  );
};

export default About;
