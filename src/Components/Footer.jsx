import React from 'react';
import './Footer.css';
import { FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer className="custom-footer">
        <div className="footer-content">
          <div className="footer-left">
            <h4>Contact Me</h4>
            <p>Email: huzafasabahat@gmail.com</p>
            <p>Phone: 03164564339</p>
          </div>
          <div className="footer-right">
            <a href="https://www.instagram.com/zyfaa.lifts" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
