import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

const Header = () => (
  <header>
    <Link to="/">
      <img src={logo} alt="Reddit Timer Logo" />
    </Link>
    <nav>
      <Link to="/search">Search</Link>
      <Link to="#How-it-works">How it works</Link>
      <Link to="#About">About</Link>
    </nav>
  </header>
);

export default Header;
