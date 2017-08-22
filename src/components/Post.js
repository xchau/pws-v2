import React from 'react';
import '../styles/Post.css';

import { Link } from 'react-router-dom';

import Moment from 'moment';
import Icon from 'antd/lib/icon';

/**** ADD REACT HELMET ****/

export const Post = (props) => {
  const path = `/${props.project.pathName}`;
  return (
    <div
      className="post-container"
      id={props.project.pathName}
    >
      <div className="post-quick-view">
        <Icon className="post-view-icon" type="eye-o" />
      </div>
      <div className="post-heading-container">
        <Link
          className="post-header"
          to={path}
        >
          { props.project.heading }
        </Link>
        <span className="post-date">
          Published { Moment(props.project.createdAt).format('MMMM Do, YYYY') }
        </span>
        <span className="post-stack">
          { props.project.stack }
        </span>
      </div>
      <div className="post-content-container">
        { props.children }
      </div>
    </div>
  );
};
