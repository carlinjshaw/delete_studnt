import React from 'react'
import '../styles/Static.css';
import { FaGithub, FaFacebookSquare, FaMoneyBillWave } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">        
        <span className="githubLink">
          <FaGithub onClick={() => window.open('https://github.com/PhilRug')} />
        </span>
        <span className="facebookLink">
          <FaFacebookSquare onClick={() => window.open('https://www.facebook.com/pjizzle141/')} />
        </span>
        <span className="linkedinLink">
          <FaMoneyBillWave onClick={() => window.open('https://www.venmo.com/u/PJ-Ruggiero')} />
        </span>
      </div>
    </div>
  );
};

export default Footer;