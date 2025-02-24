import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
      <Link to="/" className="home-link">Home</Link>
    </footer>
  );
};

export default Footer;
