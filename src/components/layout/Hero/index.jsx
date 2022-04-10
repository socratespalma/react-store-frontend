import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { StyledHero } from './Hero.styled';

export default function Hero() {
  return (
    <StyledHero>
      <h1>
        We stand out by thinking <span className="main-verb">differently</span>
      </h1>
      <h2>We provide the best experience to our customers</h2>
      <Link to="/" className="hero-cta">
        Discover
        <FiChevronRight className="chevron" />
      </Link>
    </StyledHero>
  );
}
