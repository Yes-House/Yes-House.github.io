import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';

import { ReactComponent as Hamburger } from '../../assets/icons/menu.svg'
// import { ReactComponent as Brand } from '../../assets/logo/logo.svg'

// import { ReactComponent as Brand } from '../../assets/logo/JustYe_40.svg'
import { ReactComponent as Brand } from '../../assets/logo/JustYe_48_53.svg'

import "./mynavbar.css"

function MyNavbar() {

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }


    return(
      <div>
          <nav className="navbar">
          <div className="container">
            <div className="logo">
              <Brand />
            </div>            
            <div className="menu-icon" onClick={handleShowNavbar} onKeyDown={handleShowNavbar} role="presentation"
            >
            {/* <div className="menu-icon" onClick={handleShowNavbar} onKeyDown={handleShowNavbar}> */}
              <Hamburger />
            </div>
            <div className={`nav-elements  ${showNavbar && 'active'}`}>
              <ul>
                <li>
                <HashLink smooth to="#">Home</HashLink>
                </li>
                {/* <li>
                  <HashLink smooth to="#skills">Skills</HashLink>
                </li> */}
                <li>
                <HashLink smooth to="#projects">Menu</HashLink>
                </li>
                <li>
                <HashLink smooth to="#about">Order</HashLink>
                </li>
                <li>
                <HashLink smooth to="#contact">Contact</HashLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>   

        

    </div>
    )
}

export default MyNavbar;