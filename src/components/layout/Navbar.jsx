import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const Navbar = ({ title = 'Github Finder' }) => {
    return (
      <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
        <div className="container mx-auto">
          <div className="flex justify-between items-center px-2 mx-2">
            <div className="flex-none">
              <FaGithub className="inline pr-2 text-3xl" />
              <Link to="/" className="text-lg font-bold align-middle">
                {title}
              </Link>
            </div>
  
            <div className="flex-1 flex justify-end">
                <Link to="/" className="btn btn-ghost btn-sm rounded-btn">HOME</Link>
                <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">ABOUT</Link>
            </div>
          </div>
        </div>
      </nav>
    );
};
  
Navbar.defaultProps = {
    title: 'Github Finder',
}

Navbar.propTypes = {
    title: PropTypes.string,
}

export default Navbar