// src/components/About.js

import React from 'react';
import './Educational.css';
import './Health.css';
import Navbar from './Navbar';
import Disclaimer from './Disclaimer';
import { Link } from 'react-router-dom';

const Education = () => {
  return (
    <div className="about-container">
      <nav>
        <Navbar />
      </nav>

      <div className="education-container">
        <h1 className="education-heading">TRUST PROVIDING FREE HEALTH?</h1>
        <p>Our trust is dedicated to providing free healthcare services to those in need, ensuring equitable access to medical assistance for underserved individuals. Through our compassionate initiatives, we aim to improve health outcomes and enhance the well-being of vulnerable communities. Our commitment to health equity drives us to create a healthier and more inclusive society..</p>

        <div className="education-text-container">
          <h2 className="education-subheading">Why HEALTH?</h2>
          <div className="education-box">
            <p>Health is of utmost importance because it is the foundation of a fulfilling and productive life. It encompasses physical, mental, and social well-being, enabling individuals to thrive and contribute positively to their communities. Good health not only enhances personal happiness but also supports economic growth, social cohesion, and overall societal development. By prioritizing health, we invest in a brighter and sustainable future for individuals and societies alike....</p>
          </div>
        </div>
        <div className="about-image-container"> {/* Add the image container */}
          <img src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/10/Desk/2021_10$largeimg_1049653012.jpeg" alt="About Us" className="education-image" />
        </div>

        <div className="education-map-paragraph-container">
          <div className="education-map-box">
            <img src="https://img.msf.org/AssetLink/86c3txo57666d1218v3pa78cv617ssha.jpg" alt="India Map" className="india-map" />
          </div>
          <div className="education-paragraph-box">
            <h2>Global Health Security Index 2022: India ranked 66th
              </h2>
            <p>
            As per the Global Health Security (GHS) Index 2021, the world’s average overall GHS Index score was reduced to 38.9 (out of 100) in 2022, from a score of 40.2 in the GHS Index, 2020. GHS Index is developed in partnership with the Nuclear Threat Initiative (NTI)  Center for Health Security at the Bloomberg School of Public Health.



India ranked 66 out of 195 countries with an overall Index score of 42.8 and along with a change of -0.8 from 2019. ..</p>
          </div>
        </div>


        <p style={{ color: 'red', fontSize: '30px' }}>Around 45% of deaths among children under 5 years of age are linked to undernutrition. These mostly occur in low and middle-income countries. At the same time, in these same countries, rates of childhood obesity are rising..</p>



        <div className="education-data-outer-container">
          <div className="education-data-left-color"></div> {/* Left color */}
          <div className="health-data-container">
            <div className="health-data-box">
              <h1>469 million</h1>
              <p>According to the World Health Organization (WHO), approximately 469 million people in India lack regular access to essential medicines, indicating a significant challenge in ensuring healthcare equity and accessibility in the country. ...</p>
            </div>
            <div className="health-data-box">
              <h1>Health problems in India</h1>
              <p>Non-communicable diseases like diabetes and cardiovascular issues prevail in India. ...</p>
            </div>
            <div className="health-data-box">
              <h1>Is India's population good or bad?</h1>
              <p>India's population faces health challenges but strives for better access to healthcare and improved health outcomes.</p>
            </div>
          </div>
          <div className="education-data-right-color"></div> {/* Right color */}
        </div>

      </div>
      <div className="donate-section">
        <h4 style={{ color: 'red', fontSize: '30px' }}>

        Almost 38 million deaths occurred due to non-communicable diseases ( NCDs) each year. In that 16 million deaths occur before the age of 70 & 82% of these premature deaths occurred in low- and middle-income countries</h4>
        <p>The World Health Organisation (WHO) indicates that India ranks very high among the nations affected by the rising wave of premature deaths caused by non-communicable diseases, which account for 60% of all deaths in India..</p>
        <Link to="/donate">
          <button className="donate-button">Yes I Want To Donate ❤️‍🩹</button>
        </Link>
      </div>
      <div className="important-header">
        <h2 >Health and its importance</h2>
        <p>Health is vital for overall well-being, encompassing physical, mental, and social aspects. It enables individuals to lead fulfilling lives, boosts productivity, and reduces healthcare burdens. Disease prevention, healthcare access, and health education are essential for a thriving society. Prioritizing health collectively ensures a brighter and healthier future for all..</p>


        <div className="single-image-container">
          <h4> Right To Healthy</h4>
          <img src="/image/health.jpg" alt="Description" className="single" />

          <p>The "Right to Healthy" is an essential human right that encompasses access to healthcare services, nutritious food, clean water, safe housing, and a clean environment. This right recognizes that every individual should have the opportunity to attain and maintain good health, free from any discrimination or barriers. Governments and societies have a responsibility to protect and promote this right, striving for equitable and accessible healthcare for all, and creating conditions that support overall well-being and a healthy lifestyle....</p>
        </div>
      </div>
      <div className="button-container">
    <Link to="/donate" className="donate-link-button">YES I Want To Donate ❤️‍🩹</Link>
  </div>

      <div className="Education-child">
        <h2 >OUR TURST PROVIDING FREE HEALTH  TO NEED PEOPLE </h2>
        <p>
        Our trust is dedicated to making a lasting and transformative impact on the lives of underserved individuals by providing free health services to those in need. We firmly believe that healthcare is a fundamental right, and our mission is to ensure that every person, regardless of their socio-economic background, has access to quality medical assistance. Through our unwavering commitment and compassionate approach, we strive to empower the vulnerable communities we serve, promoting preventive care, early diagnosis, and timely treatments. By fostering partnerships with healthcare professionals and leveraging community support, we aim to create a sustainable and inclusive healthcare ecosystem. Together, we work towards building a healthier, happier, and more resilient society, where no one is left behind in their pursuit of well-being...

        </p>


        <div className="one-image-container">
          <h4> Why health equity?</h4>
          <video controls className="single-video">
      <source src="https://www.youtube.com/watch?v=xaAY3hxDO5w" type="video/mp4" />
     
    </video>

          <p>Health equity is crucial because it ensures that everyone, regardless of their background or socio-economic status, has the same opportunity to achieve good health and well-being. Our trust is committed to providing health equity by offering free healthcare services to those in need. We believe that no one should be denied access to essential medical assistance due to financial constraints or other barriers. By focusing on health equity, we aim to bridge the gap between privileged and underserved communities, promoting fairness, justice, and equal opportunities for better health outcomes. Through our initiatives, we strive to create a more inclusive and compassionate society, where health is a right, not a privilege, and where every individual can lead a healthy and fulfilling life......</p>
        </div>
        <Link to="/donate" className="donate-link-button">YES I Want To Donate ❤️‍🩹</Link>
      </div>

      <div className="disclaimer">
        <Disclaimer />
      </div>
    </div>
  );
};

export default Education;
