/* eslint-disable import/no-unresolved */
import notFound from '@assets/img/notFound.svg';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import { StyledFlex } from '@styles/Flex.styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { Styled404 } from './NotFound.styled';

export default function NotFoundPage() {
  return (
    <StyledFlex>
      <Header />
      <Styled404>
        <figure className="nf_container">
          <img src={notFound} className="nf-img" alt="not found" />
        </figure>
        <h1>Oops, we couldn&apos;t find that page!</h1>
        <p>Go here instead</p>
        <Link to="/">Home</Link>
      </Styled404>
      <Footer />
    </StyledFlex>
  );
}
