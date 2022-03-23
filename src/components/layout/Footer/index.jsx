/* eslint-disable import/no-unresolved */
import getYear from '@utils/getYear';
import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { StyledFooter, StyledSocialIcons } from './Footer.styled';

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <StyledFooter>
      <h1>Amapola Escarlata</h1>
      <h2>How can we help?</h2>
      <Link to="/pages/help">FAQs</Link>
      <Link to="/pages/contact-us">Contact us</Link>
      <Link to="/policies/return-policy">Return policy</Link>
      <Link to="/policies/shipping-policy">Shipping policy</Link>
      <h2>My account</h2>
      <Link to="/account/login">Login</Link>
      <Link to="/account/register">Sign up</Link>
      <h2>Our company</h2>
      <Link to="/pages/about-us">About us</Link>
      <Link to="/policies/terms-of-service">Terms of service</Link>
      <Link to="/policies/privacy-policy">Privacy policy</Link>
      <h2>Be the first to know</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Sign up</button>
      </form>
      <h2>Connect with us</h2>
      <StyledSocialIcons>
        <FaFacebook />
        <FaInstagram />
        <FaWhatsapp />
      </StyledSocialIcons>
      <p>&copy;{getYear()} Amapola Escarlata. All Rights Reserved</p>
    </StyledFooter>
  );
}
