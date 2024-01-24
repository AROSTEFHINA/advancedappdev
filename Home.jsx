// Importing necessary modules
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'
// import celeb from '../assets/celeb.jpg';

// Functional component for the Home page
const Home = () => {
  return (
    <div>
      {/* Navigation */}
      <nav>
        <div className="menu">
          <div className="logo">
            <Link to="/">SmartSurvey</Link>
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Aboutapp">About</Link></li>
            <li><a href="mailto:arostefhina26@gmail.com">Contact Us</a></li>
            <li><Link to="/FeedbackFormMicro">Feedback</Link></li>
            <li><Link to="/Signup">Log out</Link></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      {/* <img src={celeb} alt="celeb" style={{ width: '1900px' , height: '50%', objectFit: 'cover', borderRadius: '8px' }} /> */}
      <div className="Baby">
      <div className="foto"></div>
      <div className="center">
        <div className="title">MAKE SMARTER DECISIONS</div>
        <div className="sub_title">Create online surveys, forms, and questionnaires</div>
      </div>
      <div className="center1">
        <div className="sub_title1">to collect and analyze data.</div>
        <div className="btns">
          <div className="aish">
            <button><Link to='/ButtonMain'> Get Started </Link></button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="wrapper">
          <ul className="footer-links">
            <li><i className="fab fa-twitter"><Link to='/privacy'>Privacy policy</Link></i></li>
            <li><i className="fab fa-faqs"><Link to='/FAQ'>FAQs</Link></i></li>
          </ul>
        </div>
        <div className="footer-info">
          <div className='rowCol'>
            <center><p>&copy; 2023 SmartSurvey. All rights reserved.</p></center>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
};

// Exporting the Home component
export default Home;
