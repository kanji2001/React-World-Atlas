import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Headers = () => {
  const [show, setShow] = useState(false);

  const handleButtonToggle = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="navbar-grid">
            <div className="logo">
              <NavLink to="/">
                <h1>WorldAtlas</h1>
              </NavLink>
            </div>

            {/* Navigation */}
            <nav className={`menu ${show ? 'menu-mobile' : 'menu-web'}`}>
              <ul onClick={() => setShow(false)}>
                <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                <li><NavLink to="/country" activeClassName="active">Country</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
              </ul>
            </nav>

            {/* Hamburger Menu Button */}
            <div className="ham-menu">
              <button onClick={handleButtonToggle} aria-label="Toggle Menu">
                <GiHamburgerMenu />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Headers;
