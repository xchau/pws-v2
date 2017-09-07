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
          <p>The idea for this.city came to my
            <a
              alt="Link to Jamieson's GitHub"
              href="https://github.com/jamiesonbates"
              target="_blank"
              rel="noopener noreferrer"
            >
              project partner
            </a>
            and I during one of mini-breaks from brainstorming. Jamieson started to gripe about a noisy dog kennel around the corner from his apartment. We soon realized that there were very little measures a person could take to address some of the issues around their neighborhood. There was a Waze for traffic, but not for noisy dog kennels, broken glass, potholes or potential danger.
          </p>
          <div className="project-img-row">
            <div className="project-img-box">
              <img
                alt="this.city login"
                className="project-img-two-small"
                src="https://res.cloudinary.com/xchau/image/upload/v1503705591/login_fmklgn.png" />
              <img
                alt="this.city map view"
                className="project-img-two-small"
                src="https://res.cloudinary.com/xchau/image/upload/v1503705591/map_dzxrsd.png" />
            </div>
          </div>
        </div>
        <div className="project-description-box">
          <p>
            The gist of this.city is fairly simple. Users can pin their gripes (from a variety of categories) to a map. This map is visible to all this.city users. Fellow users can then verify the claim or not. The end goal is to promote attention and awareness, as well as to warn others of potential danger in their area.
          </p>
          <div className="project-img-row">
            <div className="project-img-box">
              <img
                alt="this.city add issue"
                className="project-img-two-small"
                src="https://res.cloudinary.com/xchau/image/upload/v1503705591/report_jheu2y.png" />
              <img
                alt="this.city verify"
                className="project-img-two-small"
                src="https://res.cloudinary.com/xchau/image/upload/v1503705591/problem_stxrqn.png" />
            </div>
          </div>
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
