import React from 'react';
import '../styles/AboutMe.css';
import profileImage from '../styles/images/profile.png'; // Make sure to replace with the actual path to your image

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <img src={profileImage} alt="Carlos Lavayen Jr." className="profile-photo" />
      <p>
        Hello! My name is Carlos Lavayen Jr., and I hail from the vibrant city of Guayaquil, Ecuador. Although my roots trace back to Ecuador, I have spent my entire life basking in the sunshine of Orlando, Florida. This city has shaped me into who I am today, blending my rich cultural heritage with the dynamic spirit of Florida.
      </p>
      <p>
        I am a fervent competitor at heart, finding joy and fulfillment in various forms of competition. For the past eight years, I have been passionately engaged in jiujitsu, a discipline that has not only honed my physical prowess but also instilled in me the values of perseverance and discipline. Beyond the mats, I have a profound love for rugby. I am a proud founding member of the Central Florida Claymores and currently serve on the board as the Social Director, where I work tirelessly to foster a strong sense of community and camaraderie within our team.
      </p>
      <p>
        My competitive spirit doesn't end there. I am an avid player of Super Smash Brothers Melee, a game that has taken me across the country to compete at various tournaments. In addition to competing, I am deeply involved in the gaming community as one of the local Tournament Organizers in the Central Florida region, where I help bring together enthusiasts and foster a vibrant, competitive scene.
      </p>
      <p>
        My passion for technology and development led me to pursue formal education in the field. I proudly attended the UCF Full Stack Development course, which I completed in June 2024. This rigorous program equipped me with a comprehensive skill set, allowing me to build sophisticated full-stack applications. My journey through this course has further fueled my enthusiasm for software development and my desire to create impactful, innovative solutions.
      </p>
      <p>
        In all aspects of my life, whether on the jiujitsu mats, the rugby field, the gaming arena, or in the realm of software development, I strive to bring dedication, passion, and a relentless pursuit of excellence. Thank you for taking the time to learn a bit about me!
      </p>
    </section>
  );
};

export default AboutMe;
