import React from 'react';
import { FaSearch, FaShoppingBag, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import BrandLogo from '../../assets/img/Brand_logo.png';
import { StyledHeader, StyledHeaderIcons, StyledLogo } from './Header.styled';

export default function Header() {
  return (
    <StyledHeader>
      <StyledLogo>
        <img style={{ width: '3.3rem' }} src={BrandLogo} alt="logo" />
        <Link to="/">Amapola Escarlata</Link>
      </StyledLogo>
      <StyledHeaderIcons>
        <FaSearch />
        <Link to="/account/login">
          <FaUserAlt />
        </Link>
        <FaShoppingBag />
      </StyledHeaderIcons>
    </StyledHeader>
  );
}
