import React from 'react';
import '../styles/Content.css';

import Icon from 'antd/lib/icon';

export const CustomContent = (props) => {
  return (
    <div className="content-container">
      <div className="content-box">
        ...
        <br />
        Really
        <br />...<br />...<br />...<br />
        long
        <br />...<br />...<br />...<br />...<br />...<br />...
        <br />...<br />...<br />...<br />...<br />...<br />...
        <br />...<br />...<br />...<br />...<br />...<br />...
        <br />...<br />...<br />...<br />...<br />...<br />...
        <br />...<br />...<br />...<br />...<br />...<br />...
        <br />...<br />...<br />...<br />...<br />...<br />...
        <br />...<br />...<br />...<br />...<br id="next" />...<br />
        content
      </div>
      <div
        className="content-top-box"
        onClick={() => props.scrollTo('top')}
      >
        <Icon
          className="content-top-icon"
          type="up"
        />
      </div>
    </div>
  );
};
