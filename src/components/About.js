import React from 'react';
import '../styles/Project.css';
import '../styles/About.css';

import resume from '../assets/files/chau-minh-resume.pdf';

export const About = (props) => {
  return (
    <div className="content-box">
      <div className="about-hero">
        <div className="about-profile-pic">
          
        </div>

        Hello world! Pleased to meet you. I'm a web dev with experience teaching and working with diverse groups. My goal is to promote diversity, tolerance, and social welfare through app development (especially relevant in this day and age). Let's get in touch. First drink is on me!

        <a
          download="chau-minh-resume.pdf"
          href={resume}
        >
          <div className="about-dl-resume">
            Résumé
          </div>
        </a>
      </div>
    </div>
  );
};
