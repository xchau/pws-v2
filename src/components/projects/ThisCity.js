import React from 'react';
import '../../styles/Project.css';

import Icon from 'antd/lib/icon';

export const ThisCity = (props) => {
  return (
    <div className="content-box">
      <section className="project-tldr project-section">
        <h1>this.city</h1>
        <p>Remember that giant pothole just around the corner that you always have to swerve to avoid? Everyone gripes about it, but the city doesn't seem to know. With this.city, community members can pin areas of caution or interest to a shared map and draw attention to the issues that affect our daily lives.</p>
        <div className="project-link-row">
          <a
            alt="Link to GitHub"
            href="https://github.com/xchau/this-city"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              className="project-link-enabled"
              type="folder" />
          </a>
          <a
            alt="Link to deployed app"
            className="project-link-disabled"
            href={null}
          >
            <Icon
              className="project-link-disabled"
              style={{ fontSize: '1.1rem' }}
              type="eye-o" />
          </a>
        </div>
      </section>
      <div className="project-divider"></div>
      <div className="project-description-container">
        <div className="project-description-box">
          <p>Remember that giant pothole just around the corner that you always have to swerve to avoid? Everyone gripes about it, but the city doesn't seem to know. With this.city, community members can pin areas of caution or interest to a shared map and draw attention to the issues that affect our daily lives.</p>
          <div className="project-img-row">
            <div className="project-img-box">
              <img
                alt="Blip pic 2"
                className="project-img-one"
                src="https://res.cloudinary.com/xchau/image/upload/v1491348232/kkahrfhlaorxxi2jg3my.jpg" />
            </div>
          </div>
        </div>
        <div className="project-description-box">
          <p>Remember that giant pothole just around the corner that you always have to swerve to avoid? Everyone gripes about it, but the city doesn't seem to know. With this.city, community members can pin areas of caution or interest to a shared map and draw attention to the issues that affect our daily lives.</p>
          <div className="project-img-row">
            <div className="project-img-box">
              <img
                alt="Blip pic 2"
                className="project-img-one"
                src="https://res.cloudinary.com/xchau/image/upload/v1491348232/kkahrfhlaorxxi2jg3my.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
