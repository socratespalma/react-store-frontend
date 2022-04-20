/* eslint-disable import/no-unresolved */
import notFound from '@assets/img/notFound.svg';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import { StyledFlex } from '@styles/Flex.styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { Styled404, Styled404Nav } from './NotFound.styled';

export default function NotFoundPage() {
  return (
    <StyledFlex>
      <Header />
      <Styled404>
        <figure className="nf_container">
          <img src={notFound} className="nf-img" alt="not found" />
        </figure>
        <h1>Oops, we couldn&apos;t find that page!</h1>
        <p>Go here instead: </p>
        <Styled404Nav>
          <Link to="/" className="nf-link">
            Home
          </Link>
          <Link to="/pages/help" className="nf-link">
            FAQ
          </Link>
          <Link to="/pages/contact-us" className="nf-link">
            Contact us
          </Link>
        </Styled404Nav>
      </Styled404>
      <Footer />
    </StyledFlex>
  );
}
