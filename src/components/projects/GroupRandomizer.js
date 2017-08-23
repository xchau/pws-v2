import React from 'react';
import '../../styles/Project.css';

import Icon from 'antd/lib/icon';

export const GroupRandomizer = (props) => {
  return (
    <div className="content-box">
      <section className="project-tldr project-section">
        <h1>Group Randomizer</h1>
        <p>This was a short assignment given to my at Galvanize. The idea is to create an app that takes in a string of names and evenly split them into a specified number of groups. A great exercise to brush up on performant array manipulation.</p>
        <div className="project-link-row">
          <a
            alt="Link to GitHub"
            href="https://github.com/xchau/group-randomizer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              className="project-link-enabled"
              type="folder" />
          </a>
          <a
            alt="Link to deployed app"
            href="https://xchau-group-randomizer.herokuapp.com"
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
          <p>This was a short assignment given to my at Galvanize. The idea is to create an app that takes in a string of names and evenly split them into a specified number of groups. A great exercise to brush up on performant array manipulation.</p>
          <div className="project-img-row">
            <img alt="Blip pic 1" src="https://res.cloudinary.com/xchau/image/upload/v1491350200/t0khhsrrotynxydsyxr2.jpg" />
          </div>
        </div>
        <div className="project-description-box">
          <p>This was a short assignment given to my at Galvanize. The idea is to create an app that takes in a string of names and evenly split them into a specified number of groups. A great exercise to brush up on performant array manipulation.</p>
          <div className="project-img-row">
            <img alt="Blip pic 2" src="https://res.cloudinary.com/xchau/image/upload/v1491348232/kkahrfhlaorxxi2jg3my.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};
