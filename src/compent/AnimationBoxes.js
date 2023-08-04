import React from 'react';
import './AnimationBoxes.css'; // Import the CSS file for styling

const AnimationBoxes = () => {
  // Array to store the information for each box
  const boxes = [
    {
      id: 1,
      title: 'Education',
      description: 'We are empowering underserved communities with quality education, fostering knowledge, and enabling brighter futures for all ....',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREIvrCrYDBNG9YM4QSYSegW7alMeHktRKkrQ&usqp=CAU',
      link: '/Education', // Replace with the URL of the education page
    },
    {
      id: 2,
      title: 'Health',
      description: 'We are dedicated to providing essential health services to underprivileged individuals, promoting wellness for vulnerable communities ....',
      image: "/image/chek.jpg",
      link: '/health-page', // Replace with the URL of the health page
    },
    {
      id: 3,
      title: 'Shelter',
      description: 'We are committed to providing safe and secure shelter for the homeless and impoverished, ensuring dignity and comfort for all ....',
      image: "/image/house.jpg",
      link: '/shelter', // Replace with the URL of the shelter page
    },
    {
      id: 4,
      title: 'Food',
      description: 'We are dedicated to eradicating hunger, nourishing lives, and ensuring access to nutritious food for those in need ....',
      image: 'https://www.embracingtheworld.org/wp-content/assets/images/shelter-paripally-1100.jpg',
      link: '/food-page', // Replace with the URL of the food page
    },
  ];

  return (
    <div className="animation-boxes-container">
      {boxes.map((box) => (
        <a key={box.id} href={box.link} className="animation-box">
          <div className="box-image">
            <img src={box.image} alt={box.title} />
          </div>
          <div className="box-info">
            <h3>{box.title}</h3>
            <p>{box.description}</p> {/* Display the description here */}
            <button className="read-more-button">Read More</button>
          </div>
        </a>
      ))}
    </div>
  );
};

export default AnimationBoxes;
