import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <Link to="https://profy.dev">profy.dev</Link>
    <img src="#" alt="Reddit Timer Logo" />
    <Link to="/terms&privacy">Terms&Privacy</Link>
  </footer>
);

export default Footer;
