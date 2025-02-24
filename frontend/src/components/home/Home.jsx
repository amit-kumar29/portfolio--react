import './home.css'
import logo from '../../assets/images/home.jpg'
import { Link } from 'react-router-dom'
import TypingEffect from './TypingEffect';

const Home = () => {

    return (
        <div className="homepage">
            <section className="home" id="home">
                <div className="home-content">
                    <h3>Hello, It's Me</h3>
                    <h2>Amit Kumar</h2>
                    {<TypingEffect/>}
                    
                    <p>Currently I am pursuing Masters in Computer Applications from National Institute of Technology , Warangal. </p>
                    <div className="social-media">
                        <Link to='https://github.com/amit-kumar29' target="_blank" rel="noopener noreferrer">
                            <box-icon type='logo' name='github'></box-icon>
                        </Link>
                        <Link to='https://www.instagram.com/bishnoe_amit_29/' target="_blank" rel="noopener noreferrer">
                            <box-icon type='logo' name='instagram'></box-icon>
                        </Link>
                        <Link to='https://www.linkedin.com/in/amit-kumar29/' target="_blank" rel="noopener noreferrer">
                            <box-icon type='logo' name='linkedin-square'></box-icon>
                        </Link>
                    </div>
                    <div className="btn">
                        <Link to='https://drive.google.com/file/d/1WgtCWbl1fRNBMrROdQYlm6wIbE2ItB-Z/view?usp=drive_link' target='_blank' rel='noopener noreferrer'>Download CV
                        </Link>
                    </div>
                    
                </div> 
                <div className="home-img">
                    <img src={logo} />
                </div>
            </section>
        </div>
    );
}

export default Home;
