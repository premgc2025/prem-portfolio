
// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import CV from './CV';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="about">
        <h2>About Me</h2>
        <p>
         <span>Hey! </span>  I am a professional web developer with a specialization in JavaScript and the MERN stack (MongoDB, Express, React, Node.js). Problem-solving is my strength, and I enjoy creating reactive well-designed web applications.I have a strong foundation in front-end technologies like React and back-end frameworks like Node.js and Express, so I'm all about seamless user experiences and efficient, scalable server-side solutions.

        </p>
        <p>
        A firm believer in clean, maintainable code, keeping my learning fresh with the latest trends in the web development world. Whether it's creating dynamic, data-driven applications or improving website performance, there's always an opportunity to learn.
        </p>
        <p>
        If I'm not coding, I'm probably trying to understand new technologies, working on exciting projects, or trying to further expand my skill set with some "coding tutorials". 
        </p>
        <p>
        Let's make something great together!
        </p>
      </div>
   
    </motion.div>
    
  );
};

export default About;
