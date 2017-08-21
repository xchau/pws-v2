import React from 'react';
import '../styles/Post.css';

// import { Link } from 'react-router-dom';
//
import Moment from 'moment';
import Icon from 'antd/lib/icon';

export const Post = (props) => {
  return (
    <div className="post-container">
      <div className="post-heading-container">
        <span className="post-header">
          { props.heading }
        </span>
        <span className="post-date">
          Published { Moment(props.date).format('MMMM Do, YYYY') }
        </span>
      </div>
      <div className="post-content-container">
        { props.children }
      </div>
    </div>
  );
};
