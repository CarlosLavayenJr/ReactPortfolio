import React from 'react';
import '../styles/Resume.css';

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <a href="your-resume-link" download>Download Resume</a>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        {/* Add more proficiencies as needed */}
      </ul>
    </section>
  );
};

export default Resume;
