import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <div className="project-content">
            <h3>Plant Disease Detection Using Deep Learning</h3>
            <p>
              Created a model to identify plant diseases using deep learning. Utilized Python and TensorFlow for image recognition, achieving [specific accuracy/other metrics].
            </p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-content">
            <h3>Personal Portfolio Website</h3>
            <p>
              Built a responsive portfolio site using HTML, CSS, and JavaScript. Showcased projects and skills with a focus on clean design. Added interactive features and animations.
            </p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-content">
            <h3>E-commerce Website</h3>
            <p>
              Developed a full-stack e-commerce site with React for the front end and Node.js for the back end. Integrated payment and user login features, following best practices for coding and state management.
            </p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-content">
            <h3>Food Buddy</h3>
            <p>
              Developed a web application using React JS to help users find and track recipes, manage meal plans, and explore new dishes based on dietary preferences and available ingredients. Implemented features such as search functionality, user authentication, and meal planning. Focused on creating an intuitive user interface and ensuring a responsive design.
            </p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-content">
            <h3>Expense Tracker</h3>
            <p>
              Created a JavaScript-based application to assist users in tracking and managing their expenses. Incorporated features for setting budgets, monitoring spending, and generating interactive charts and reports for better financial insights. Emphasized user-friendly design and efficient data handling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
