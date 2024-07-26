import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skills-category">
          <h3>Languages</h3>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>BootStrap</li>
            <li>C++</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="skills-category">
          <h3>Frameworks & Libraries</h3>
          <ul>
            <li>React</li>
            <li>Flask</li>
          </ul>
        </div>
        <div className="skills-category">
          <h3>Tools & Platforms</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Visual Studio Code</li>
          </ul>
        </div>
        <div className="skills-category">
          <h3>Other Skills</h3>
          <ul>
            <li>Responsive Web Design</li>
            <li>UI/UX Basics</li>
            <li>Cross-Browser Compatibility</li>
          </ul>
        </div>
        <div className="skills-category">
          <h3>Soft Skills</h3>
          <ul>
            <li>Problem-Solving</li>
            <li>Teamwork</li>
            <li>Communication</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
