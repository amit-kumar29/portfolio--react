import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import aboutimg from '../../assets/images/home.jpg';

const About = () => {
    return (
        <div className='aboutpage'>
            <section className="about" id="about">
            <div className="about-img">
                <img src={aboutimg}/>
            </div>

            <div className="about-content">
                <h2 className="heading">About <span>Me</span></h2>
                <h3>FrontEnd Developer!</h3>
                <p>
                    Hello! I’m Amit Kumar, a passionate Master of Computer Application (MCA) student at the National Institute of Technology, Warangal, with a solid foundation in full-stack development and software engineering. I hold a Bachelor’s degree in Physical Sciences and have been honing my skills in programming languages like C++, Java, and JavaScript.
                    I thrive on creating interactive and user-centric web applications, demonstrated through projects such as my personal portfolio website and a dynamic book store site. My technical toolkit includes HTML, CSS, and JavaScript, and I actively contribute to coding platforms like LeetCode and HackerRank.
                    Ranked 164th in NIMCET 2022, I am driven by challenges and committed to continuous learning and improvement. Connect with me to explore my work and collaborate on exciting tech projects!
                </p>
                <div className="btn">
                    <Link to="#" >Read More</Link>
                </div>
                
            </div>
            </section>
        </div>
    );
}

export default About;
