import React from 'react';
import '../styles/Header.css';

import { Link } from 'react-router-dom';

import Layout from 'antd/lib/layout';
import Input from 'antd/lib/input';

const { Header } = Layout;
const Search = Input.Search;

export const CustomHeader = (props) => {
  return (
    <Header className="header-container">
      <Link to="/">
        <div className="header-box">
          <span id="top" className="header-name">
            Minh Nhat Chau
            <span className="header-title">Web Developer</span>
          </span>
          {/* <span className="header-title">Web Developer</span> */}
          <Search
            className="header-search-bar"
            onSearch={value => console.log(value)}
            placeholder="input search text"
          />
        </div>
      </Link>
    </Header>
  );
};
