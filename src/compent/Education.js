// src/components/About.js

import React from 'react';
import './Educational.css';
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
        <h1 className="education-heading">TRUST providing Free Education?</h1>
        <p>Our trust is committed to providing free education to children, offering a nurturing environment for their growth and learning. Our dedicated educators ensure a holistic approach, fostering academics, creativity, and character-building. We inspire young minds to reach their full potential, preparing them for a brighter future through quality education.</p>

        <div className="education-text-container">
          <h2 className="education-subheading">Why Education?</h2>
          <div className="education-box">
            <p>We provide quality education to children, fostering a nurturing environment for growth and learning. Our dedicated team of educators ensures a holistic approach to development, encompassing academics, creativity, and character-building. Through innovative methods, we inspire young minds to reach their full potential, preparing them for a bright future ....</p>
          </div>
        </div>
        <div className="about-image-container"> {/* Add the image container */}
          <img src="https://www.iet.org.in/wp-content/uploads/2016/02/boy-child-school-learning-education-chalk-numbers.jpg" alt="About Us" className="education-image" />
        </div>

        <div className="education-map-paragraph-container">
  <div className="education-map-box">
    <img src="https://images.template.net/82015/free-blue-india-map-vector-mrbs7.jpg" alt="India Map" className="india-map" />
  </div>
  <div className="education-paragraph-box">
    <h2>At 472 million, children account for 40% of India’s population And yet,</h2>
    <p>
      only 2.46% of the 2021-22 Union Budget was allocated to their development and welfare. In fact, the National Plan of Action for Children recommends that budgetary allocations for children should be 5% of the country’s GDP – ours has been stagnant at 0.43% of GDP for the last two years.
    </p>
  </div>
</div>


        <p style={{ color: 'red', fontSize: '30px' }}>India’s children battle some of the worst circumstances in the world.</p>



        <div className="education-data-outer-container">
          <div className="education-data-left-color"></div> {/* Left color */}
          <div className="education-data-container">
            <div className="education-data-box">
              <h1>10.1 million</h1>
              <p>child labourers go to work instead of school</p>
            </div>
            <div className="education-data-box">
              <h1>1 of 3 child</h1>
              <p>brides in the world is from India</p>
            </div>
            <div className="education-data-box">
              <h1>2 of 3
                child</h1>
              <p>deaths, below the age of 5, are caused by malnutrition</p>
            </div>
          </div>
          <div className="education-data-right-color"></div> {/* Right color */}
        </div>

      </div>
      <div className="donate-section">
        <h4 style={{ color: 'red', fontSize: '30px' }}>immunization

          NFHS 4 2016

          500%
          increase
          in crimes against children between 2008-2018

          NCRB 2018

          This problem before us is a mammoth one. But one that can be solved within our lifetimes.</h4>
        <p>This problem before us is a mammoth one. But one that can be solved within our lifetimes. All it needs is for each one of us to come together and do everything in our power to contribute to a sustainable solution.</p>
        <Link to="/donate">
          <button className="donate-button">Yes I Want To Donate 📚</button>
        </Link>
      </div>
      <div className="important-header">
        <h2 >Importance of Child Rights</h2>
        <p>According to the United Nations Convention on the Rights of the Child (UNCRC), which

          was ratified by India in 1992, all children have fundamental rights which must be

          recognized by governments and citizens alike. At SAI BABA TURST, we’re committed to doing.

          everything we can to ensure the rights of India’s children and so, work on 4 key

          programmatic areas.</p>


        <div className="single-image-container">
          <h4> EDUCATION Right To Development</h4>
          <img src="https://www.orchidsinternationalschool.com/wp-content/uploads/2022/11/Importance-of-Education-in-Girls.jpg" alt="Description" className="single" />

          <p>Education is a basic human right that works to raise men and women out of poverty, level inequalities and ensure sustainable development. But worldwide 244 million children and youth are still out of school for social, economic and cultural reasons. Education is one of the most powerful tools in lifting excluded children and adults out of poverty and is a stepping stone to other fundamental human rights. It is the most sustainable investment. The right to quality education is already firmly rooted in the Universal Declaration of Human Rights and international legal instruments, the majority of which are the result of the work of UNESCO and the United Nations...</p>
        </div>
      </div>
      <div className="button-container">
    <Link to="/donate" className="donate-link-button">YES I Want To Donate 📚</Link>
  </div>

      <div className="Education-child">
        <h2 >WE ARE PROVIDING FREE EDUCATION </h2>
        <p>
          Our trust is committed to providing free education to underprivileged individuals, aiming to bridge the gap between socio-economic barriers and learning opportunities. Through our dedicated efforts, we strive to empower disadvantaged communities with knowledge and skills that can transform their lives. By removing financial obstacles, we ensure that deserving students have access to quality education, unlocking their potential and fostering a brighter future. We believe that education is a fundamental right, and we work tirelessly to create an inclusive and equitable society where every individual has the chance to thrive and contribute positively to their communities and the world at large..

        </p>


        <div className="one-image-container">
          <h4> Education for Poor Children</h4>
          <img src="https://res.cloudinary.com/hkf2ycaep/image/fetch/d_project-placeholder.png,f_auto,fl_lossy/https://d23vk1trp0fmbf.cloudfront.net/projects/104957c4-64bb-4fea-a14a-6418b03412d3/project-image" alt="Description" className="single" />

          <p>According to data available at that time, India had an estimated 30-40 million out-of-school children, which is a concerning number. However, please note that these figures may have changed over time due to various factors such as government initiatives, changes in policies, and the impact of the pandemic.

            For the most current and accurate data, I recommend referring to the latest reports from reputable sources like the Ministry of Education (formerly Ministry of Human Resource Development), UNESCO, or other relevant educational authorities in India.....</p>
        </div>
        <Link to="/donate" className="donate-link-button">YES I Want To Donate 📚</Link>
      </div>

      <div className="disclaimer">
        <Disclaimer />
      </div>
    </div>
  );
};

export default Education;
