import React from 'react';
import '../styles/Portfolio.css';
import projectImage from '../styles/images/Webapp.png'; // Make sure to replace with the actual path to your image
const Portfolio = () => {
  const projects = [
    { title: 'Project 1', image: 'project1.jpg', liveLink: 'https://goodgameorg.onrender.com/', repoLink: 'https://github.com/CarlosLavayenJr/GoodGameOrg' },
    { title: 'Project 2', image: 'project2.jpg', liveLink: 'http://project2.com', repoLink: 'http://github.com/project2' },
    { title: 'Web App', image: projectImage, liveLink: 'https://browser-text-editor-xcrl.onrender.com', repoLink: 'https://github.com/CarlosLavayenJr/Browser-Text-Editor' },
    { title: 'Project 4', image: 'project4.jpg', liveLink: 'http://project4.com', repoLink: 'http://github.com/project4' },
    { title: 'Project 5', image: 'project5.jpg', liveLink: 'http://project5.com', repoLink: 'http://github.com/project5' },
    { title: 'Project 6', image: 'project6.jpg', liveLink: 'http://project6.com', repoLink: 'http://github.com/project6' },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live</a>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">Repo</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
