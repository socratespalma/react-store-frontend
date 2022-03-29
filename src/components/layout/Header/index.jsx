import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../../../assets/img/Brand_logo.png';
import Navbar from '../Navbar';
import { StyledHeader, StyledHeaderIcons, StyledLogo } from './Header.styled';

export default function Header() {
  return (
    <StyledHeader>
      <StyledLogo>
        <img style={{ width: '3.3rem' }} src={BrandLogo} alt="logo" />
        <Link to="/">Amapola Escarlata</Link>
      </StyledLogo>
      <StyledHeaderIcons>
        <Navbar />
      </StyledHeaderIcons>
    </StyledHeader>
  );
}
