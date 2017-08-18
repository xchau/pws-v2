import React from 'react';
import '../styles/Content.css';

import Layout from 'antd/lib/layout';

const { Content } = Layout;

export const CustomContent = (props) => {
  return (
    <Content>
      <div className="content-container">
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
    </Content>
  );
};
