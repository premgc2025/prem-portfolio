import React from 'react';

const CV = () => {
    return (
        <div className='cv-container'>
            <div className="cv-left">
                <div className="cv-highlight">
                    <h2>HIGHLIGHTS</h2>
                    <div className="underline"></div>
                    <ul>
                        <li>Total 3 plus years in web development</li>
                        <li>Experience working on JavaScript, Reactjs, MERN Stack</li>
                        <li>Design reusable component which are fully config based with centralised state management</li>
                        <li>Capable of preparing UI architechture</li>
                    </ul>


                </div>
                <div className='experience'>
                    <h2>Experience</h2>
                    <div className="underline"></div>
                    <h3>MERN Developer</h3>
                    <h5>Enqueuesoft Nepal</h5>
                    <p className='date'><span>&#128467;</span> May 2022 - On Going</p>
                    <ul>
                        <li>Worked on JavaScript, Reactjs, Nodejs, Express, MongoDB, MySQL, Nextjs, CSS, Redux, TheContex, React Hooks, etc.. </li>
                        <li>Build reusable components which are fully coding based</li>
                        <li>Handling a team of 2 junior web developers</li>
                    </ul>

                </div>

                <div className='experience'>
                   
                    <div className="underline-subline"></div>
                    <h3>ICT management and support</h3>
                    <h5>UNFPA Country Office, Kathmandu</h5>
                    <p className='date'><span>&#128467;</span> Jan 2014 - April-2022</p>
                    <ul>
                    <li>Maintained and upgraded web application and ICT infrastructure smoothly throughout many years.</li>
                        <li>Supported implementation and managing  new IT equipment so that IT system were well-functioning. </li>
                        <li>Maintained and upgraded ICT infrastructure smoothly throughout many years.</li>
                        <li>Ensured well-functioning, Software , Google G suite for all staff.</li>
                        <li>Ensured proper management of ICT assets as per IT policies.</li>
                        <li>Installed and configured of the ICT network upgrade for Country Office.</li>
                        
                    </ul>

                </div>

            </div>
            <div className="cv-right">
            <div className="education">
                    <h2>Education</h2>
                    <div className="underline"></div>
                    <p className='education-p1'>Master of Computer Application (MCA) :: First Division</p>
                    <p>Bachelor of Computer Application (BCA):: First Division</p>
                </div>
                <div className="strengths">
                    <h2>STRENGTHS</h2>
                    <div className="underline"></div>
                    <ul>
                        <li>Development Language</li>
                        <p className='language-list' ><span className='language-btn'>ReactJs</span> <span className='language-btn'>NodeJs</span> 
                        <span className='language-btn'>Express</span><span className='language-btn'>MongoDB</span>
                        <span className='language-btn'>NextJs</span> <span className='language-btn'>CSS</span> 
                        <span className='language-btn'>React Router, React Hooks</span> <span className='language-btn'>JavaScript</span> 
                        <span className='language-btn'>ES6</span> <span className='language-btn'>MySQL</span> 
                        </p>
                     
                     <li>Designing</li>
                     <p className='language-list' ><span className='language-btn'>HTML</span> <span className='language-btn'>CSS</span> 
                        <span className='language-btn'>Tailwind CSS</span> <span className='language-btn'>Responsive Design</span> 
                        <span className='language-btn'>Figma to Webpage</span>
                        </p>

                        <li>Tools</li>
                        <p className='language-list' ><span className='language-btn'>Git/GitHub</span> <span className='language-btn'>Postman</span> 
                        <span className='language-btn'>Thunder Client</span> 
                        <span className='language-btn'>Docker</span> 
                        </p>

                        <li>API and Features</li>
                        <p className='language-list' ><span className='language-btn'>API Integration</span> <span className='language-btn'>REST API</span> 
                        <span className='language-btn'>Web deploymnet</span> 
                        <span className='language-btn'>GenAI</span> 
                        </p>

                        <li>ICT Management and support</li>
                        <p className='language-list' ><span className='language-btn'>System management</span> <span className='language-btn'>ICT deployment management</span> 
                        <span className='language-btn'>Network management</span> 
                        <span className='language-btn'>ICT technical support</span> 
                        </p>

                    </ul>

                </div>
               

            </div>

        </div>
    );
}

export default CV;
