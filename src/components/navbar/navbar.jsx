import React from 'react'
import './navbar.css'
const NavBar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-container">
      {/* Left Section: Logo */}
      <div className="navbar-logo">
      <img src="/logo/long-logo.png" alt="Airbnb Logo" />
      </div>

      {/* Middle Section: Navigation Links */}
      <div className="navbar-links">
        <a href="/">Stays</a>
        <a href="/">Experiences</a>
        <a href="/">Online Experiences</a>
      </div>

      {/* Right Section: User Menu */}
      <div className="navbar-menu">
        <a href="/" className="navbar-menu-item">Airbnb your home</a>
        <button className="navbar-menu-item globe-icon">
          <i className="fas fa-globe"></i> {/* Globe icon for language */}
        </button>
        <div className="navbar-user">
          <button className="menu-icon">
            <i className="fas fa-bars"></i> {/* Menu icon */}
          </button>
          <div className="user-avatar">
            <i className="fas fa-user-circle"></i> {/* User icon */}
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default NavBar
