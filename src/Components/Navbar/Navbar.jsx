import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Twelfth navbar example">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-a" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-a" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-a" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-a" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-a" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-a" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;