import React from 'react';
import '../styles/Header.css';

import { Link } from 'react-router-dom';

import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import Layout from 'antd/lib/layout';

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
            onSearch={keywords => props.filterProjects(keywords, props.allProjects)}
            placeholder="search by keyword"
          /> : null
        }
        {
          props.searched ? <div className="header-results-box">
            {props.keywords}
            <span className="header-close-span">
              <Icon
                className="header-close-icon"
                onClick={props.clearSearch}
                type="close-square-o"
              />
            </span>
          </div> : null
        }
      </div>
    </Header>
  );
};
