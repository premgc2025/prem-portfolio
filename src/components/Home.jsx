// src/components/Home.js
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion'
import profilePic from '../assets/images/profile.jpg';  // Your profile image path
import CV from './CV';
import { Outlet } from 'react-router-dom';

const Home = () => {
  const [hovered, setHovered] = useState(false);
  const [start, setStart] = useState(true);

  const [idInterval, setIdInterval] = useState(null)

  console.log("start", start)


  const handlerButton = () => {

    if (start) {
      setStart(!start)
      const id = setInterval(() => {

        colorRef.current.style.backgroundColor = changeColor()
        textRef.current.style.backgroundColor = changeColor()

      }, 3000);
      setIdInterval(id)
    }
    else {
      setStart(!start)

      clearInterval(idInterval)

    }



  }


  // Handle mouse movement to create dynamic 3D effect
  const handleMouseMove = (e) => {
    const { clientX: mouseX, clientY: mouseY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Calculate rotation based on mouse position
    const rotateX = (mouseY - centerY) / 20;
    const rotateY = (mouseX - centerX) / 20;

    // Apply the calculated rotations dynamically
    document.documentElement.style.setProperty('--rotateX', `${rotateX}deg`);
    document.documentElement.style.setProperty('--rotateY', `${rotateY}deg`);

  };

  // Handle mouse enter/leave events for hover effect
  const handleMouseEnter = () => {

    setHovered(true);


  };

  const handleMouseLeave = () => {
    setHovered(false);
    colorRef.current.style.backgroundColor = changeColor()
    textRef.current.style.backgroundColor = changeColor()
  };

  let colorRef = useRef()
  let textRef = useRef()

  const changeColor = () => {
    let c1 = Math.ceil(Math.random() * 255)
    let c2 = Math.ceil(Math.random() * 255)
    let c3 = Math.ceil(Math.random() * 255)
    return `rgb(${c1}, ${c2}, ${c3})`


  }
 
  // setInterval(() => {
  //  let c = colorRef.current.style.backgroundColor = changeColor()
  //   textRef.current.style.backgroundColor = c


  // }, 5000);

  return (
    <div className="home-container">
     
    <div className="home-main">

   
   
    <motion.div

      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 5, }}
      onMouseMove={handleMouseMove}

    >

      {/* Profile Picture Animation */}
      <div className="profile-main">

        <motion.div
          ref={colorRef}
          className="profile-container"
          initial={{ scale: 0 }} // Start from small scale
          animate={{ scale: 1, }} // Zoom to normal size
          transition={{ type: "spring", stiffness: 200, damping: 20, duration: 5 }}
        >
          <motion.img
            src={profilePic}
            alt="Profile"
            className="profile-pic"
            whileHover={{ scale: 1.02, }}

          />
        </motion.div>

      </div>


      {/* Name Text with 3D Animation */}
      <motion.h1
        className="name"
        initial={{ opacity: 0, y: -50 }} // Start slightly above and invisible
        animate={{ opacity: 1, x: 0, y: 0, }}    // Fade in and slide into position
        transition={{ duration: 1, delay: 0.5 }}

        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}

        style={{
          transform: hovered
            ? 'rotateX(var(--rotateX)) rotateY(var(--rotateY))' // Dynamic 3D effect
            : 'rotateX(50deg) rotateY(70deg)',                    // Default flat position
          transition: 'transform 0.1s ease-in-out',

          // Smooth transition for hover
        }}
      >
        Hi, I'm Prem Bahadur G.C.
      </motion.h1>

      
      {/* Profession Text with 3D Animation */}
      <motion.div

        className="profession"
        initial={{ opacity: 0, y: 150 }} // Start below and invisible
        animate={{ opacity: 1, x: 0, y: 0 }}   // Fade in and slide into position
        transition={{ duration: 1, delay: 1 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: hovered
            ? 'rotateX(var(--rotateX)) rotateY(var(--rotateY))' // Dynamic 3D effect
            : 'rotateX(10deg) rotateY(30deg)',                    // Default flat position
          transition: 'transform 0.1s ease-out',  // Smooth transition for hover

        }}

      >
        I'm a MERN stack developer specializing in JavaScript, Reactjs!
      </motion.div>
      <div className="hColor" ref={textRef}></div>


     

      <motion.button className='home-btn' whileHover={{ scale: 1.1 }} onClick={() => {
        handlerButton()
      }} >{start ? "Start" : "Stop"}</motion.button>
    </motion.div>

    </div>
    <div className="cv-page">
     
    <CV />

    </div>
    
  


    </div>
  );
};

export default Home;
