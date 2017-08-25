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
          <p>
            When it was time to decide on a capstone project idea, I had two equally appealing candidates: 1) a visual web app that broke down spending from various charities, or 2) visual travel diary/cookbook. The decision didn't prove too difficult as
            <a
              alt="Link to Charity Navigator"
              href="https://www.charitynavigator.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Charity Navigator
            </a>
            (the premier resource on charity data) sent me this in response to an API key request:
          </p>
          <div className="project-img-row">
            <div className="project-img-box">
              <img
                alt="Charity Navigator response"
                className="project-img-one"
                src="https://res.cloudinary.com/xchau/image/upload/v1503625931/charitynav-email_w2ba9l.png" />
            </div>
          </div>
        </div>
        <div className="project-description-box">
          <p>
            So travel app it was! The question now was to decide on a tech stack. I had a slight crush on React.js, but the showcase required a little more pizazz so I decided to create another
            <a
              alt="Link to React Native"
              href="https://facebook.github.io/react-native"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Native
            </a>
            application. This final project also demanded I learn a new technology not taught in our program (React Native was not taught, but I had done my Q3 project with it). On careful consideration,
            <a
              alt="Link to Redux.js"
              href="http://redux.js.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            seemed like a natural extension. After all, this was a semi-large app that required a lot of cross-component communication and a global store would be extra helpful.
          </p>
          <div className="project-img-row">
            <div className="project-img-box">
              <img
                alt="React Redux"
                className="project-img-one"
                src="https://res.cloudinary.com/xchau/image/upload/v1503626479/redux-react_kj1975.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
