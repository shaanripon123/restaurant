import React from 'react';
import './Navbar.css';
import logo from '../../../../images/logo2.png';
const Navbar = () => {
    return (
        <nav class="navbar navbar-light bg-none fixed-top">
        <div class="container-fluid">
        <a class="navbar-brand" href="/home"><img className="img-fluid" src={logo} alt="" /></a>
         
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
            <img className="img-fluid offcanvas-title" id="offcanvasNavbarLabel" src={logo} alt="" />
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/login">Login</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/signup">Sign up</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
       
      </nav>
    );
};

export default Navbar;