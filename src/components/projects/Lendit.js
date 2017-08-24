import React from 'react';
import '../../styles/Project.css';

import Icon from 'antd/lib/icon';

export const Lendit = (props) => {
  return (
    <div className="content-box">
      <section className="project-tldr project-section">
        <h1>LENDit</h1>
        <p>Last week I wanted to try out a new crockpot recipe, but alas, was not stocked with one. A good crockpot goes for well over $50, and since this was going to be a one time ordeal, it would be nice if I could just borrow one. Luckily, there's an app for that!</p>
        <div className="project-link-row">
          <a
            alt="Link to GitHub"
            href="https://github.com/xchau/lendit-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              className="project-link-enabled"
              type="folder" />
          </a>
          <a
            alt="Link to deployed app"
            href="http://xchau-lendit.herokuapp.com"
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
          <p>Last week I wanted to try out a new crockpot recipe, but alas, was not stocked with one. A good crockpot goes for well over $50, and since this was going to be a one time ordeal, it would be nice if I could just borrow one. Luckily, there's an app for that!</p>
          <div className="project-img-row">
            <div className="project-img-box">
              <div className="project-img-box">
                <img
                  alt="Blip pic 2"
                  className="project-img-one"
                  src="https://res.cloudinary.com/xchau/image/upload/v1491348232/kkahrfhlaorxxi2jg3my.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div className="project-description-box">
          <p>Last week I wanted to try out a new crockpot recipe, but alas, was not stocked with one. A good crockpot goes for well over $50, and since this was going to be a one time ordeal, it would be nice if I could just borrow one. Luckily, there's an app for that!</p>
          <div className="project-img-row">
            <div className="project-img-box">
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
    </div>
  );
};
