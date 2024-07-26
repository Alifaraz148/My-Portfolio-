import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="skill-item">React</div>
        <div className="skill-item">JavaScript</div>
        <div className="skill-item">CSS</div>
        {/* Add more skills */}
      </div>
    </section>
  );
}

export default Skills;
