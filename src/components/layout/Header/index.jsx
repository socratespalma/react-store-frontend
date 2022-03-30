/* eslint-disable import/no-unresolved */
import BrandLogo from '@assets/img/Brand_logo.png';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import { StyledHeader, StyledLogo } from './Header.styled';

export default function Header() {
  return (
    <StyledHeader>
      <StyledLogo>
        <img className="logo" src={BrandLogo} alt="logo" />
        <Link to="/">Amapola Escarlata</Link>
      </StyledLogo>
      <Navbar />
    </StyledHeader>
  );
}
