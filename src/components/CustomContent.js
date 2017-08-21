import React from 'react';
import '../styles/Content.css';

import Icon from 'antd/lib/icon';

import { Post } from './Post';

export const CustomContent = (props) => {
  return (
    <div className="content-container">
      <div className="content-box">
        {
          props.projects.map((project, idx) =>
          <Post
            key={idx}
            date={project.createdAt}
            heading={project.title}
            route="/"
          >
            {project.description}
          </Post>)
        }
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
