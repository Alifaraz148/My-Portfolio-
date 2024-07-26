import React from 'react';
import './AboutMe.css';
import profileImage from 'F:/Portfilio/my-portfolio/src/components/images/profile.jpg'; 
function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me-container">
        <img src={profileImage} alt="Ali Faraz" className="profile-image" />
        <div className="about-me-content">
          <h2>About Me</h2>
          <p>
            Hi, I'm Ali Faraz, a passionate front-end developer with a degree in Computer Science from COMSATS University, Vehari Campus. I specialize in creating beautiful, responsive web applications using modern technologies like React.js. My goal is to combine my skills in web development with my enthusiasm for innovative design to deliver outstanding user experiences.
          </p>
          <p>
            With experience in building a variety of projects including personal portfolios, e-commerce sites, and deep learning applications, I strive to create solutions that are both functional and visually appealing. When I’m not coding, you can find me playing cricket, volleyball, or participating in coding competitions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
