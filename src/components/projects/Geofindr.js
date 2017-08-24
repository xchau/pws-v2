import React from 'react';
import '../../styles/Project.css';

import Icon from 'antd/lib/icon';

export const Geofindr = (props) => {
  return (
    <div className="content-box">
      <section className="project-tldr project-section">
        <h1>Geofindr</h1>
        <p>For my first project with React.js, I thought I'd make a Geoguessr clone. The nature of the game challenged me to leverage React's usage of JSX components and uni-directional data flow. How geographically-savvy are you?</p>
        <div className="project-link-row">
          <a
            alt="Link to GitHub"
            href="https://github.com/xchau/react-geofindr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              className="project-link-enabled"
              type="folder" />
          </a>
          <a
            alt="Link to deployed app"
            href="https://react-geofindr.herokuapp.com/"
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
          <p>For my first project with React.js, I thought I'd make a Geoguessr clone. The nature of the game challenged me to leverage React's usage of JSX components and uni-directional data flow. How geographically-savvy are you?</p>
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
          <p>For my first project with React.js, I thought I'd make a Geoguessr clone. The nature of the game challenged me to leverage React's usage of JSX components and uni-directional data flow. How geographically-savvy are you?</p>
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
