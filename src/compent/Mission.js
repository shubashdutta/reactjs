import React from 'react'
import './Mission.css';
// import { useSpring, animated } from 'react-spring';



const OurMission = () => {
    const boxes = [
        {
          id: 1,
          title: 'Humanity',
          description: 'We are empowering underserved communities with quality education, fostering knowledge, and enabling brighter futures for all ....',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJGsraHT2qEJMUS4yerjMTG2h35X3EwGWQoY1yvxcPXqmW6up4x-Bp5mNr6VjU3CcELfk&usqp=CAU',
         
        },
        {
          id: 2,
          title: 'Cultivate Spiritual Growth',
          description: 'Our vision encompasses spiritual growth and inner transformation. We seek to create opportunities for individuals to embark on a journey of self-discovery and connect with their inner selves. ....',
          image: "https://images.squarespace-cdn.com/content/v1/589534a31b10e37f9b3f7670/1508118559624-7ZZ669Y71MSNR8NG65HU/Spiritual+Growth+4.gif",
         
        },
        {
          id: 3,
          title: 'Spread Love and Kindness',
          description: 'Love is the cornerstone of our vision. We strive to spread love and kindness in all our interactions, creating a ripple effect of positive energy that touches the lives of those we serve. ....',
          image: "https://media.nojoto.com/content/media/2031746/2020/07/feed/1d94363bacc22f9c0c1eb1278fb3f445/1d94363bacc22f9c0c1eb1278fb3f445_default.gif",
        
        },
        {
          id: 4,
          title: 'Advocate for Social Justice',
          description:'Our vision includes advocating for social justice and equality. We strive to address systemic issues and create an environment where every individual has equal access to opportunities and resources.....',
          image: 'https://media3.giphy.com/media/PvkusSarVCbPsnOjTJ/200w.gif?cid=82a1493bcuai7m571pnj2fn3ze8wgpt8o6fg5w6ptfi9kt7r&ep=v1_gifs_related&rid=200w.gif&ct=g',
         
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
               
              </div>
            </a>
          ))}
        </div>
      );
    };

export default OurMission;


