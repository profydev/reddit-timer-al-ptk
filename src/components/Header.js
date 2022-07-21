import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/images/logo.svg';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 80px;
`;

const StyledNav = styled.nav`
  padding-top: 3px;

  a {
    text-decoration: none;
    margin-left: 26px;
  }
`;

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <img style={{ display: 'block' }} src={logo} alt="Reddit Timer Logo" />
    </Link>
    <StyledNav>
      {/* The Links are anchor elements, so they receive */}
      {/* styling as an 'a' tag */}
      <Link to="/search/javascript">Search</Link>
      <Link to="#how-it-works">How it works</Link>
      <Link to="#about">About</Link>
    </StyledNav>
  </StyledHeader>
);

export default Header;
