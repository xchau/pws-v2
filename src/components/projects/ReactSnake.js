import React from 'react';
import '../../styles/Project.css';

import Icon from 'antd/lib/icon';

export const ReactSnake = (props) => {
  return (
    <div className="content-box">
      <section className="project-tldr project-section">
        <h1>React Snake</h1>
        <p>Recently, my friend was asked to create the classic arcade game "Snake" in React for a technical interview. The easier way to approach this would be to leverage HTML5's canvas element. Thinking about the game in terms of stateful vs. presentational components was a little bit trickier, but I think I got pretty close!</p>
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
            href="https://xchau-react-snake.herokuapp.com"
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
          <p>Recently, my friend was asked to create the classic arcade game "Snake" in React for a technical interview. The easier way to approach this would be to leverage HTML5's canvas element. Thinking about the game in terms of stateful vs. presentational components was a little bit trickier, but I think I got pretty close!</p>
          <div className="project-img-row">
            <img alt="Blip pic 1" src="https://res.cloudinary.com/xchau/image/upload/v1491350200/t0khhsrrotynxydsyxr2.jpg" />
          </div>
        </div>
        <div className="project-description-box">
          <p>Recently, my friend was asked to create the classic arcade game "Snake" in React for a technical interview. The easier way to approach this would be to leverage HTML5's canvas element. Thinking about the game in terms of stateful vs. presentational components was a little bit trickier, but I think I got pretty close!</p>
          <div className="project-img-row">
            <img alt="Blip pic 2" src="https://res.cloudinary.com/xchau/image/upload/v1491348232/kkahrfhlaorxxi2jg3my.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};
