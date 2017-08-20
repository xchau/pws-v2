import React from 'react';
import '../styles/Header.css';

import { Link } from 'react-router-dom';

import Layout from 'antd/lib/layout';

const { Header } = Layout;

export const CustomHeader = (props) => {
  return (
    <Header className="header-container">
      <div className="header-box">
        <Link to="/">
          <span id="top" className="header-name">
            Minh Nhat Chau
            <span className="header-title">Web Developer</span>
          </span>
        </Link>
      </div>
    </Header>
  );
};
