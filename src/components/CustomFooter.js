import React from 'react';
import '../styles/Footer.css';

import Layout from 'antd/lib/layout';
import Icon from 'antd/lib/icon';

import linkedin from '../assets/img/linkedin-logo.gif';

const { Footer } = Layout;
const logoStyle = {
  color: '#303030',
  fontSize: '20px'
};

export const CustomFooter = (props) => {
  return (
    <Footer className="footer-container">
      <div className="footer-info-box">
        {/* Minh Chau */}
      </div>
      <div className="footer-contact-box">
        <a
          href="mailto:contact@mnchau.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            style={logoStyle}
            type="mail"
          />
        </a>
        <a
          href="https://github.com/xchau"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            style={logoStyle}
            type="github"
          />
        </a>
        <a
          href="https://linkedin.com/in/chau-minh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="Link to LinkedIn"
            className="footer-linkedin footer-logo"
            src={linkedin}
          />
        </a>
      </div>
    </Footer>
  );
};
