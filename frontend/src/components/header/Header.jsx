import { Link, NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <Link to="portfolio" id="logo"><h2>Portfolio</h2></Link>
            </div>
            <div className="navbar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="services">Services</NavLink>
                <NavLink to="portfolio">Portfolio</NavLink>
                <NavLink to="contact">Contact</NavLink>
            </div>
            
        </div>
    );
}

export default Header;
