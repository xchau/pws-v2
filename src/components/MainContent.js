import React from 'react';
import '../styles/Content.css';

import Icon from 'antd/lib/icon';

import { Post } from './Post';

export const MainContent = (props) => {
  return (
    <div className="content-box">
      <div className="content-list">
        {
          props.projects ?
            props.projects.length ? props.projects.map((project, idx) =>
            <Post
              key={idx}
              project={project}
            >
              {project.blurb}
            </Post>) : <div>No results</div>
            :
            <Icon
              className="content-load-icon"
              type="loading"
            />
        }
      </div>
      <div
        className="content-top-box"
        onClick={() => props.scrollTo('top')}
        onMouseEnter={props.toggleScrollHover}
      >
        <Icon
          className="content-top-icon"
          type="to-top"
        />
      </div>
    </div>
  );
};

export default MainContent;
