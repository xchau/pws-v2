import React from 'react';
import '../styles/Header.css';

import Layout from 'antd/lib/layout';
// import Button from

const { Header } = Layout;

export const CustomHeader = (props) => {
  return (
    <Header className="header-container">
      <div className="header-box">
        <span id="top" className="header-name">
          Minh Nhat Chau
          <span className="header-title">Web Developer</span>
        </span>
      </div>
    </Header>
  );
};
