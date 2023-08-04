import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';
import Navbar from './Navbar';
import Disclaimer from './Disclaimer';

const ContactPage = () => {
  const workPics = [
    'image/book.jpg',
    'image/chek.jpg',
    'image/co.jpg',
    'image/com.jpg',
    'image/cont.jpg',
    'image/health.jpg',
    'image/home.jpg',
    'image/vision.png',
    'image/saibabapic.jpg',
  ];

  const openWhatsApp = () => {
    const whatsappNumber = '+919392267346'; // Replace this with your WhatsApp number
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div className='contact'>
        <h1>Contact Us</h1>
        <p>Thank you for your interest in Sai Baba Seva Sadan Trust. If you have any queries, want to know more about our initiatives, or would like to get involved, please feel free to reach out to us. We are always delighted to connect with like-minded individuals and organizations who share our vision of serving humanity with love and compassion.</p>

        <div className="contact-info">
          <table>
            <tbody>
              <tr>
                <td>Email:</td>
                <td>info@saibabasevasadantrust.com</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>+91 9392267346</td>
              </tr>
              <tr>
                <td>Address:</td>
                <td>DR No 202, Kolanukonda</td>
              </tr>
              <tr>
                <td>Office Hours:</td>
                <td>
                  <ul>
                    <li>Monday to Friday: 9:00 AM - 6:00 PM</li>
                    <li>Saturday: 9:00 AM - 2:00 PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="our-work-header">
          <h1>Our Work</h1>
          <div className="work-pics-container">
            <div className="work-pics">
              {workPics.map((url, index) => (
                <img key={index} src={url} alt={`Work Pic ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>

        <div className="get-involved">
          <h2>Get Involved</h2>
          <p>Whether through volunteering, donations, or spreading awareness, your support can make a significant difference in the lives of those in need. Join us in our noble cause and be a part of the Sai Baba Seva Sadan Trust family.</p>
        </div>

        <p>We look forward to hearing from you and working together towards a world filled with love, compassion, and service to humanity, just as Sai Baba envisioned.</p>
        
        <div className="whatsapp-logo" onClick={openWhatsApp}>
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
      </div>

      <Disclaimer />
    </div>
  );
};

export default ContactPage;
