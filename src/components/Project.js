import React from 'react';
import '../styles/Project.css';

import Icon from 'antd/lib/icon';

export const Project = (props) => {
  const deployClass = props.data.deployedAt ?
    'project-link-enabled' : 'project-link-disabled';
  const heroImgStyle = {
    background: 'url(https://res.cloudinary.com/xchau/image/upload/v1504842340/miser-hero_f8chq5.png)',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%'
  };
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
            href={props.data.deployedAt}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              className={deployClass}
              style={{ fontSize: '1.1rem' }}
              type="eye-o" />
          </a>
        </div>
      </section>
      <div className="project-divider"></div>
      <div className="project-description-container">
        <div className="project-hero-box">
          <div style={heroImgStyle}></div>
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
