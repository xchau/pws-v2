import React from 'react';
import '../../styles/Project.css';

import Icon from 'antd/lib/icon';

export const Blip = (props) => {
  return (
    <div className="content-box">
      <section className="project-tldr project-section">
        <h1>Blip</h1>
        <p>Blip serves as a recipe book for travel, where users may share their experiences abroad or follow in another’s footsteps to adopt their experiences. Interactions with the app are streamlined to ensure you focus more on the world around than your phone.</p>
        <div className="project-link-row">
          <a
            alt="Link to GitHub"
            href="https://github.com/xchau/blip"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              className="project-link-enabled"
              type="folder" />
          </a>
          <a
            alt="Link to deployed app"
            href={null}
          >
            <Icon
              className="project-link-disabled" type="eye-o" />
          </a>
        </div>
      </section>
      <div className="project-divider"></div>
      <div className="project-description-container">
        <div className="project-description-box">
          <p>zzz</p>
        </div>
        <div className="project-description-box">
          <p>zzz</p>
        </div>
      </div>
    </div>
  );
};
