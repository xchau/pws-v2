import React from 'react';
import '../../styles/Project.css';

import Icon from 'antd/lib/icon';

export const Miser = (props) => {
  return (
    <div className="content-box">
      <section className="project-tldr project-section">
        <h1>Miser</h1>
        <p>Imagine you're in a new city, wanting to hit the town. But you're a miser. Enter stage left: Miser, a coupon aggregation web app that pulls in dining and entertainment deals near you. Nice.</p>
        <div className="project-link-row">
          <a
            alt="Link to GitHub"
            href="https://github.com/xchau/miser-deals"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              className="project-link-enabled"
              type="folder" />
          </a>
          <a
            alt="Link to deployed app"
            href="https://miser-deals.surge.sh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              className="project-link-enabled"
              style={{ fontSize: '1.1rem' }}
              type="eye-o" />
          </a>
        </div>
      </section>
      <div className="project-divider"></div>
      <div className="project-description-container">
        <div className="project-hero-box">
          <div style={{
            background: 'url(https://res.cloudinary.com/xchau/image/upload/v1504842340/miser-hero_f8chq5.png)',
            backgroundSize: 'cover',
            height: '100%',
            width: '100%'
          }}></div>
        </div>

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
