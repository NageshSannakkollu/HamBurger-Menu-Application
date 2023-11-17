// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const Home = () => (
  <div className="home-container">
    <Link to="/">
      <button type="button" className="home-container-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
          alt="home"
          className="home-image"
        />
      </button>
    </Link>
  </div>
)
export default Home
