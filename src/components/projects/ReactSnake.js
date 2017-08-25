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
            href="https://github.com/xchau/xc-react-snake"
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
          <p>One of the trickier aspects of this project was deciding which data structure to model the game board with. Following the footsteps of
            <a
              alt="Link to another React Snake"
              href="https://github.com/tomocchino/react-snake"
              target="_blank"
              rel="noopener noreferrer"
            >
              another Snake game
            </a>
            I had found, I decided to implement the board with a flat array. This turned out to be a wise decision, as it makes looping the snake from one side of the board to another much easier.</p>
          <div className="project-img-row">
            <div className="project-img-box">
              <img
                alt="Board Init 1"
                className="project-img-one"
                src="https://res.cloudinary.com/xchau/image/upload/v1503633285/board-init_ywypaw.png" />
            </div>
          </div>
        </div>
        <div className="project-description-box">
          <p>
            The board array would be filled with numbers (0, 1, 2) to represent snake, food and board elements respectively. Specifically, these numbers are used in a later function to determine how that particular cell would be rendered.
          </p>
          <div className="project-img-row">
            <div className="project-img-box">
              <img
                alt="Board Init 2"
                className="project-img-two"
                src="https://res.cloudinary.com/xchau/image/upload/v1503629902/board-init-2_dnhfth.png" />
              <img
                alt="Board Init 3"
                className="project-img-two"
                src="https://res.cloudinary.com/xchau/image/upload/v1503629903/board-init-3_xi0vhb.png" />
            </div>
          </div>
        </div>
        <div className="project-description-box">
          <p>
            By listening to keydown events, we can create some player controls. I added some extra logic to slow down player inputs as React is actually too fast at rendering the snake's movement. If this logic was not present, the snake could in certain cases double back onto itself causing an immediate gameover to the unsuspecting player...
          </p>
          <div className="project-img-row">
            <div className="project-img-box">
              <img
                alt="Keydown 1"
                className="project-img-one"
                src="https://res.cloudinary.com/xchau/image/upload/v1503633616/kd-1_mhywkv.png" />
            </div>
          </div>
        </div>
        <div className="project-description-box">
          <p>
            The only thing that remains is to re-render all of the state changes every 100ms. Check out the results and let me know what you think! There is still much styling to be added and a few more quality of life features (eg: keypress to pause/restart), but I think this is a good start.
          </p>
        </div>
      </div>
    </div>
  );
};
