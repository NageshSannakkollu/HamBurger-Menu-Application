// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const About = () => (
  <div className="about-container">
    <Link to="/about">
      <button type="button" className="home-container-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
          alt="about"
          className="about-image"
        />
      </button>
    </Link>
  </div>
)
export default About
