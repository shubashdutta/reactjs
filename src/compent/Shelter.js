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
        <h1 className="education-heading">TRUST PROVIDING free Shelter for poor family</h1>
        <p>Our trust is dedicated to providing free healthcare services to underprivileged families. We believe that access to quality healthcare is a basic right, and we work tirelessly to ensure that financial constraints do not prevent anyone from receiving essential medical assistance. By extending a helping hand to poor families, we aim to improve their health outcomes and contribute to building a healthier and more equitable society...</p>

        <div className="education-text-container">
          <h2 className="education-subheading">why Shelter?</h2>
          <div className="education-box">
            <p>Shelter is a fundamental human need and right, essential for survival, safety, and well-being. It provides protection from the elements, a sense of security, and a space to rest and rejuvenate. Having a stable and safe shelter is crucial for maintaining good health, fostering positive social interactions, and facilitating personal growth and development. Access to suitable shelter is not just about physical structures but also about creating a supportive and nurturing environment that allows individuals and families to thrive and contribute positively to society. By providing shelter, we can address one of the most basic human needs and help individuals and communities build a stronger foundation for a better future.....</p>
          </div>
        </div>
        <div className="about-image-container"> {/* Add the image container */}
          <img src="https://imgix.cosmicjs.com/e24280c0-cb42-11e9-a833-4fe99c887177-heres_why_you_would_put_your_house_in_a_trust-ogid-124788.jpg?w=1200&fit=crop" alt="About Us" className="education-image" />
        </div>

        <div className="education-map-paragraph-container">
          <div className="education-map-box">
            <img src="https://ghtc-india.gov.in/Content/LHP_Locations.png" alt="India Map" className="india-map" />
          </div>
          <div className="education-paragraph-box">
            <h2>In the 2022 Global Hunger Index, India ranks 107th out of the 121 countries with sufficient data to calculate 2022 GHI scores.
              </h2>
            <p>
            India ranks 107th in the 2022 Global Hunger Index with a score of 29.1, highlighting a serious level of hunger. Urgent measures are required to address food insecurity, malnutrition, and ensure access to nutritious food for vulnerable populations, working towards a hunger-free and healthier nation..



India ranked 66 out of 195 countries with an overall Index score of 42.8 and along with a change of -0.8 from 2019. ..</p>
          </div>
        </div>


        <p style={{ color: 'red', fontSize: '30px' }}>Homelessness in India is a significant problem on its own, with an estimated 1.8 million homeless people living on the streets...</p>



        <div className="education-data-outer-container">
          <div className="education-data-left-color"></div> {/* Left color */}
          <div className="health-data-container">
            <div className="health-data-box">
              <h1>the top 3 causes of death for homeless?</h1>
              <p> In places that listed causes of death, the most prevalent have plagued homeless populations for years: drug overdoses, violence, traffic deaths and premature lethality of treatable conditions like heart disease.......</p>
            </div>
            <div className="health-data-box">
              <h1>1.8 million homeless</h1>
              <p>Homelessness in India is a significant problem on its own, with an estimated 1.8 million homeless people living on the streets. When this large homeless population endures months of exposure to rain and winds, health complications and even deaths can occur....</p>
            </div>
            <div className="health-data-box">
              <h1>1.77 million Indians</h1>
              <p>Despite the fact that a home is one of the most significant components of a person’s life, statistics show that 1.77 million Indians are homeless[2]. Further, the true figure became larger in the post-COVID pandemic as many more people from the country’s lowest quarter got impacted..</p>
            </div>
          </div>
          <div className="education-data-right-color"></div> {/* Right color */}
        </div>

      </div>
      <div className="donate-section">
        <h4 style={{ color: 'red', fontSize: '30px' }}>

        India has pushed back poverty, still home to most poor people in world: UNDP index
</h4>
        <p>Pre-pandemic data shows 228.9 million poor people in India highest in the world, Nigeria follows at 97 million..</p>
        <Link to="/donate">
          <button className="donate-button">Yes I Want To Donate 🏘️</button>
        </Link>
      </div>
      <div className="important-header">
        <h2 >importance of Shelter </h2>
        <p>The importance of shelter cannot be overstated as it is a basic human need and fundamental right. Shelter provides protection, safety, and privacy, allowing individuals and families to live with dignity and security. Having a stable and adequate shelter contributes to physical and mental well-being, fostering a sense of stability and belonging. Moreover, shelter offers a space for rest, rejuvenation, and personal growth, enabling individuals to lead fulfilling and productive lives. Access to suitable shelter is crucial for social integration and economic participation, as it creates a foundation for individuals and communities to thrive and contribute positively to society. By recognizing the significance of shelter and ensuring its availability to all, we can work towards building inclusive and resilient communities where everyone has the opportunity to live a better life....</p>


        <div className="single-image-container">
          <h4> Right To 
shelter</h4>
          <img src="https://www.squareyards.com/cdn-cgi/image/quality=70,fit=crop,gravity=auto,format=webp/https://www.squareyards.com/blog/wp-content/uploads/2017/01/Right-to-Housing.png" alt="Description" className="single" />

          <p>In India, the right to shelter is a fundamental right guaranteed by the Constitution under Article 21, which enshrines the right to life and personal liberty. This right implies that every citizen has the right to adequate housing and shelter. The government is obligated to take measures to ensure that all citizens, especially the vulnerable and marginalized populations, have access to safe and decent housing. However, despite this right being recognized, homelessness and inadequate housing remain significant challenges in the country. Efforts are ongoing to address these issues and provide affordable housing solutions to all citizens.....</p>
        </div>
      </div>
      <div className="button-container">
    <Link to="/donate" className="donate-link-button">YES I Want To Donate 🏘️</Link>
  </div>

      <div className="Education-child">
        <h2 >OUR TURST PROVIDING FREE SHELTER TO NEED PEOPLE </h2>
        <p>
        Your trust's commitment to providing free shelter to those in need is truly commendable. Access to safe and adequate housing is a fundamental human right that significantly impacts the well-being and stability of individuals and families. By offering free shelter, your trust is making a significant difference in the lives of the less fortunate, providing them with a place to call home, and fostering a sense of security and hope for a better future. Your efforts in addressing homelessness and providing a helping hand to vulnerable populations are vital in creating a more compassionate and inclusive society. Keep up the excellent work!
        </p>


        <div className="one-image-container">
          <h4>lets build india Togethere </h4>
          <img src="image/Redeveloped.png" alt="Description" className="single" />


          <p>Building India together by focusing on the development of the underprivileged is a collective responsibility for the nation's progress. By addressing the needs of the poor and marginalized communities, we can create an inclusive and equitable society where everyone has equal opportunities to succeed. Emphasizing education, healthcare, livelihood opportunities, infrastructure, and social welfare programs is essential in uplifting lives. Prioritizing women and children's well-being and promoting environmental sustainability are also crucial steps towards building a prosperous and harmonious India. Together, by collaborating and working towards common goals, we can bring about positive change, eradicate poverty, and create a brighter future for all citizens.......</p>
        </div>
        <Link to="/donate" className="donate-link-button">YES I Want To Donate 🏘️</Link>
      </div>

      <div className="disclaimer">
        <Disclaimer />
      </div>
    </div>
  );
};

export default Education;

