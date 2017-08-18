import React from 'react';
import '../styles/Header.css';

import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

export const Header = (props) => {
  return (
    <Row>
      <Col xs={1} sm={3} md={4}></Col>
      <Col xs={22} sm={18} md={16}>
        <div className="header-box">
          <div className="header-namebox">
            <span className="header-name">
              Minh Nhat Chau
              {
                props.windowWidth > 500 ?
                  <b>Web Developer</b> : null
              }
            </span>
            {
              props.windowWidth < 500 ?
                <span className="header-alt-title">
                  Web Developer
                </span> : null
            }
          </div>
        </div>
      </Col>
      <Col xs={1} sm={3} md={4}></Col>
    </Row>
  );
};
