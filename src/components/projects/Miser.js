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
        <div className="project-description-box">
          <p>Imagine you're in a new city, wanting to hit the town. But you're a miser. Enter stage left: Miser, a coupon aggregation web app that pulls in dining and entertainment deals near you. Nice.</p>
          <div className="project-img-row">
            <img alt="Blip pic 1" src="https://res.cloudinary.com/xchau/image/upload/v1491350200/t0khhsrrotynxydsyxr2.jpg" />
          </div>
        </div>
        <div className="project-description-box">
          <p>Imagine you're in a new city, wanting to hit the town. But you're a miser. Enter stage left: Miser, a coupon aggregation web app that pulls in dining and entertainment deals near you. Nice.</p>
          <div className="project-img-row">
            <img alt="Blip pic 2" src="https://res.cloudinary.com/xchau/image/upload/v1491348232/kkahrfhlaorxxi2jg3my.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};
