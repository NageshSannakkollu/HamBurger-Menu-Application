// Write your code here
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {BsInfoCircleFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {Component} from 'react'

import './index.css'

const overlayStyle = {
  backgroundColor: '#ffffff',
}

class Header extends Component {
  render() {
    return (
      <nav className="header-container">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
            className="logo-image"
          />
        </Link>
        <Popup
          modal
          trigger={
            <button type="button" data-testid="hamburgerIconButton">
              <GiHamburgerMenu />
            </button>
          }
          overlayStyle={overlayStyle}
          className="popup-content"
        >
          {close => (
            <>
              <div className="close-button-container fixed-top">
                <Link to="/">
                  <button
                    type="button"
                    data-testid="closeButton"
                    onClick={() => close()}
                  >
                    <IoMdClose />
                  </button>
                </Link>
              </div>
              <div>
                <ul className="popup-container">
                  <Link to="/" target="/">
                    <li className="inside-container">
                      <AiFillHome className="home" />
                      <h3 className="headings">Home</h3>
                    </li>
                  </Link>
                  <Link to="/about" target="/">
                    <li className="inside-container">
                      <BsInfoCircleFill className="about" />
                      <h3 className="headings">About</h3>
                    </li>
                  </Link>
                </ul>
              </div>
            </>
          )}
        </Popup>
      </nav>
    )
  }
}

export default Header
