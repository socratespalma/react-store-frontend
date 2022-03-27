/* eslint-disable import/no-unresolved */
import getYear from '@utils/getYear';
import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
  StyledCopyright,
  StyledFooter,
  StyledFooterGrid,
  StyledFooterLogo,
  StyledFooterNavs,
  StyledSocialIcons
} from './Footer.styled';

export default function Footer() {
  return (
    <StyledFooter>
      <StyledFooterLogo>
        <h1>Amapola Escarlata</h1>
      </StyledFooterLogo>
      <StyledFooterGrid>
        <StyledFooterNavs>
          <h2>How can we help?</h2>

          <Link className="navlink" to="/pages/help">
            FAQs
          </Link>
          <Link className="navlink" to="/pages/contact-us">
            Contact us
          </Link>
          <Link className="navlink" to="/policies/return-policy">
            Return policy
          </Link>
          <Link className="navlink" to="/policies/shipping-policy">
            Shipping policy
          </Link>
        </StyledFooterNavs>
        <StyledFooterNavs>
          <h2>My account</h2>
          <Link className="navlink" to="/account/login">
            Login
          </Link>
          <Link className="navlink" to="/account/register">
            Sign up
          </Link>
        </StyledFooterNavs>
        <StyledFooterNavs>
          <h2>Our company</h2>
          <Link className="navlink" to="/pages/about-us">
            About us
          </Link>
          <Link className="navlink" to="/policies/terms-of-service">
            Terms of service
          </Link>
          <Link className="navlink" to="/policies/privacy-policy">
            Privacy policy
          </Link>
        </StyledFooterNavs>
        <StyledFooterNavs>
          <h2>Connect with us</h2>
          <StyledSocialIcons>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/Amapola-Escarlata-1765011270283166"
            >
              <FaFacebook />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/amapola_escarlata/"
            >
              <FaInstagram />
            </a>
            <FaWhatsapp />
          </StyledSocialIcons>
        </StyledFooterNavs>
      </StyledFooterGrid>
      <StyledCopyright>
        <p>&copy;{getYear()} Amapola Escarlata. All Rights Reserved</p>
      </StyledCopyright>
    </StyledFooter>
  );
}
