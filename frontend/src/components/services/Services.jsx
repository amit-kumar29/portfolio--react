import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    return (
        <div className='servicespage'>
            <section className="services" id="services">
                <h2 className="heading">Our <span>Services</span></h2>
                <div className="services-container">
                    <div className="services-box">
                    <box-icon name='code-alt' id="icon"></box-icon>
                        <h3>Web Development</h3>
                        <p>Hey this is me Amit Bishnoi</p>  
                        <div className="btn">
                            <Link to='about'>Read More</Link>
                        </div>
                    </div>
                    <div className="services-box">
                    <box-icon type='logo' name='android' className="icon"></box-icon>
                        <h3>Mobile App Development</h3>
                        <p>Hey this is me amit Bishnoi</p>
                        <div className="btn">
                            <Link to='about'>Read More</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
