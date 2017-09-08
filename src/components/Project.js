import React from 'react';
import '../styles/Project.css';

import Icon from 'antd/lib/icon';

export const Project = (props) => {
  const deployClass = props.data.deployedAt ?
    'project-link-enabled' : 'project-link-disabled';
  const demoClass = props.data.demoLink ?
    'project-link-enabled' : 'project-link-disabled';

  console.log(props);

  return (
    <div className="content-box">
      <section className="project-tldr project-section">
        <h1>{props.data.projectName}</h1>
        <p>{props.data.blurb}</p>
        <div className="project-link-row">
          <a
            alt="Link to GitHub repo"
            href={props.data.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              className="project-link-enabled"
              type="folder" />
          </a>
          <a
            alt="Link to deployed app"
            href={props.data.deployedAt ? props.data.deployedAt : null}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              className={deployClass}
              style={{ fontSize: '1.1rem' }}
              type="eye-o" />
          </a>
          <a
            alt="Link to demo video"
            href={props.data.demoLink ? props.data.demoLink : null}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              className={demoClass}
              style={{ fontSize: '1.1rem' }}
              type="play-circle-o" />
          </a>
        </div>
      </section>
      <div className="project-description-container">
        <div className="project-hero-box">
          <img
            alt="Project hero"
            className="project-hero-img"
            src={props.data.heroLink}
          />
        </div>
      </div>
      <div className="project-divider"></div>
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
