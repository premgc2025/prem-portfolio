
// src/components/Projects.js
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {url_netflix,url_ems,url_erecord, url_todo}from '../helper';


const Projects = () => {

  let project1Ref = useRef()
  let project2Ref = useRef()
  let project3Ref = useRef()
 

  const changeColor = () => {
    let c1 = Math.ceil(Math.random() * 255)
    let c2 = Math.ceil(Math.random() * 255)
    let c3 = Math.ceil(Math.random() * 255)
    return `rgb(${c1}, ${c2}, ${c3})`
  }
  return (
    <div className="project-container" onMouseOver={()=>{
      project1Ref.current.style.backgroundColor = changeColor()
    project2Ref.current.style.backgroundColor = changeColor()
    project3Ref.current.style.backgroundColor = changeColor()
    }} >

      <div className="projects project1" ref={project1Ref}>
        <h2>HTML and CSS Projects</h2>
        <ul>
          <li> <Link to={url_netflix} target='_blank' > NetFlix Clone </Link> </li>
      
         
        </ul>
      </div>

      <div className="projects project2" ref={project2Ref} >
        <h2>React Projects</h2>
        <ul>
          <li> <Link to="/" target='_blank' > Portfolio </Link> </li>
         
         
        </ul>
      </div>

      <div className="projects project3" ref={project3Ref} >
        <h2>CRUD Projects</h2>
        <ul>
          <li> <Link to={url_todo} target='_blank' > Todo List </Link> </li>
          <li> <Link to={url_ems} target='_blank' > Employee Management System</Link> </li>
           <p>For User`s Dashboard User-Name: user@gmail.com and password is password123</p>
           <li> <Link to={url_erecord} target='_blank' > Employee Record</Link> </li>
         
       
         
        </ul>
      </div>
     
   
    </div>
  );
};

export default Projects;
