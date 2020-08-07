import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Icon } from 'react-icons-kit'
import {search} from 'react-icons-kit/icomoon/search'
import {menu} from 'react-icons-kit/icomoon/menu'
const Header = ({ siteTitle }) => (
  <header >
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-2">
            <span className="logo"> </span>
          </div>
          <div className="col-12 col-sm-12 col-md-7">
            <ul>
              <li>Home</li>
              <li> Business </li>
              <li>Individual</li>
              <li>Tools</li>
              <li>About Us</li>
              <li> Media</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-3">
            <div className="right_menu">
              <ul>
                <li><Icon icon={search} /></li>
                <li>sign in</li>
                <li className="flag"></li>
                <li><Icon icon={menu} /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
