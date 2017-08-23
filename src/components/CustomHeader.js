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
      <div className="header-box">
        <Link to="/">
          <span id="top" className="header-name">
            Minh Nhat Chau
            <span className="header-title">
              Web Developer
            </span>
          </span>
        </Link>
        {
          props.showSearch ? <Search
            className="header-search-bar"
            onSearch={value => console.log(value)}
            placeholder="input search text"
          /> : null
        }
      </div>
    </Header>
  );
};
