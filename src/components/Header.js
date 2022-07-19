import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/logo.svg';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
`;

const StyledNav = styled.nav`
  a {
    text-decoration: none;
    color: black;
    margin-left: 20px;
  }
`;

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <img src={logo} alt="Reddit Timer Logo" />
    </Link>
    <StyledNav>
      <Link to="/javascript">Search</Link>
      <Link to="#How-it-works">How it works</Link>
      <Link to="#About">About</Link>
    </StyledNav>
  </StyledHeader>
);

export default Header;
