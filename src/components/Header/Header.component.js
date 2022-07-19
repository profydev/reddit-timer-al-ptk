import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/">reddit timer</Link>
    <nav>
      <Link to="/search">Search</Link>
      <Link to="#How-it-works">How it works</Link>
      <Link to="#About">About</Link>
    </nav>
  </header>
);

export default Header;
