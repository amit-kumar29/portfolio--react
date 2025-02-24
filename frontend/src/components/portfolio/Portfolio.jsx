import './Portfolio.css';
import port1 from '../../assets/images/port1.jpg';
import port2 from '../../assets/images/port2.jpg';
import port3 from '../../assets/images/port3.jpg';
import port4 from '../../assets/images/port4.jpg';
import port5 from '../../assets/images/port5.jpg';
import port6 from '../../assets/images/port6.jpg';
import { Link } from 'react-router-dom';


const Portfolio = () => {
    return (
        <div className='portfoliopage'>
            <section className="portfolio" id="portfolio">
                <h2 className="heading">Latest <span>Project</span></h2>
                <div className="portfolio-container">
                    <div className="portfolio-box">
                        <img src={port1}></img>
                        <div className="portfolio-layer">
                            <h4>Portfolio</h4>
                            <p>This project showcases our innovative approach to user experience design. Through meticulous research and creative problem-solving, we developed a visually appealing and highly functional interface that enhances user engagement and satisfaction.</p>
                            <Link to="/">
                            <box-icon name='link-external'></box-icon>
                            </Link>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src={port2}></img>
                        <div className="portfolio-layer">
                            <h4>Bookstore Website</h4>
                            <p>This project highlights our work on a dynamic bookstore website designed to enhance the shopping experience. Featuring an intuitive navigation system, advanced search functionalities, and a modern, responsive design.</p>
                            <Link to="https://amit-kumar29.github.io/Book_Store_website/">
                                <box-icon name='link-external'></box-icon>
                            </Link>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src={port3}></img>
                        <div className="portfolio-layer">
                            <h4>Interactive Login Sign-up Page</h4>
                            <p>This project involves a responsive login and signup page designed for optimal user experience. With a clean, user-friendly interface, ensuring accessibility and ease of use on mobile phones, tablets, and desktops.</p>
                            <Link to="https://amit-kumar29.github.io/responsive_login_reg/">
                                <box-icon name='link-external'></box-icon>
                            </Link>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src={port4}></img>
                        <div className="portfolio-layer">
                            <h4>Reuse App</h4>
                            <p>ReuseHub is a dynamic full-stack web application built with the MERN stack , designed to facilitate the buying and selling of used products among college students.</p>
                            <Link to="#">
                                <box-icon name='link-external'></box-icon>
                            </Link>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src={port5}></img>
                        <div className="portfolio-layer">
                            <h4>NewsHub App</h4>
                            <p>Built a dynamic and responsive news platform using React
                                and Tailwind CSS for the frontend, ensuring a seamless and user-friendly interface.</p>
                            <Link to="#">
                                <box-icon name='link-external'></box-icon>
                            </Link>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src={port6}></img>
                        <div className="portfolio-layer">
                            <h4>ATM</h4>
                            <p>Developed an ATM application in C++ that allows users to securely check their balance, deposit/withdraw
                                money, and update account information. Implemented core functionalities like mobile number updates, PIN
                                verification, and balance tracking.
                                </p>
                            <Link to="#">
                                <box-icon name='link-external'></box-icon>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;
