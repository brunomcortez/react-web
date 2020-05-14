import React from 'react';

import logo from '../../assets/logo.png';
import './style.css';

const Header = () => (
    <header className="header">
        <div className="container">
            <img className="logo" src={logo} alt="logo"/>
        </div>
    </header>
);

export default Header;