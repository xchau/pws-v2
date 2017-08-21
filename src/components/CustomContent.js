import React from 'react';
import '../styles/Content.css';

import Icon from 'antd/lib/icon';

import { Post } from './Post';

export const CustomContent = (props) => {
  return (
    <div className="content-container">
      <div className="content-box">
        <Post
          date="Date"
          heading="Post 1"
        >
          {/* <div> */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          {/* </div> */}
        </Post>
      </div>
      <div
        className="content-top-box"
        onClick={() => props.scrollTo('top')}
        onMouseEnter={props.toggleScrollHover}
      >
        <Icon
          className="content-top-icon"
          type="up"
        />
      </div>
    </div>
  );
};
