/* eslint-disable import/no-unresolved */
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import { StyledFlex } from '@styles/Flex.styled';
import React from 'react';
import { BiWorld } from 'react-icons/bi';
import { FaInstagram, FaStar } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import {
  StyledFeatures,
  StyledHero,
  StyledInsta,
  StyledMainCopy,
  StyledNewsletter
} from './HomePage.styled';

export default function HomePage() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledFlex>
      <Header />
      <section>
        <StyledHero>
          <h1>
            We stand out by thinking{' '}
            <span className="main-verb">differently</span>
          </h1>
          <h2>We provide the best experience to our customers</h2>
          <Link to="/" className="hero-cta">
            Discover
            <FiChevronRight className="chevron" />
          </Link>
        </StyledHero>
        <StyledMainCopy>
          <h1>Vintage for everyone</h1>
          <p>
            We sell vintage clothing and accesories for women who want to stand
            out from the crowd with a unique style by drawing the attention on
            every room with quality pieces.
          </p>
          <Link to="/pages/about-us" className="cta">
            Learn more
            <FiChevronRight className="chevron" />
          </Link>
        </StyledMainCopy>
        <div>
          <h1>Featured products</h1>
          {/* these are the most popular, a carousel */}
        </div>
        <div>
          <h1>New arrivals</h1>
          {/* these are new items, a carousel */}
        </div>
        <div>
          <h1>Shop by category</h1>
          {/* here goes all categories, a grid component */}
        </div>
        <StyledFeatures>
          <section>
            <FaStar className="icon-feature" />
            <h3>Quality and Durability</h3>
            <p>Our collections are made with high quality materials </p>
          </section>
          <section>
            <RiCustomerService2Fill className="icon-feature" />
            <h3>24/7 Customer Support</h3>
            <p>We help people with all their doubts</p>
          </section>
          <section>
            <BiWorld className="icon-feature" />
            <h3>Worldwide Shipping</h3>
            <p>We provide free shipping in orders over 99$</p>
          </section>
        </StyledFeatures>
        <StyledInsta>
          <FaInstagram className="icon-instasection" />
          <h1>
            Follow us on Instagram{' '}
            <span className="insta-username">@amapola_escarlata</span>
          </h1>
          <h2>Check out our favorite looks and inspiration here </h2>
          <a
            href="https://www.instagram.com/amapola_escarlata/"
            target="_blank"
            rel="noreferrer"
            className="cta"
          >
            Learn more
            <FiChevronRight className="chevron" />
          </a>
        </StyledInsta>
        <StyledNewsletter>
          <h1>Subscribe to our newsletter</h1>
          <h2>
            Sign up for our newsletter to get exclusive deals, discounts, and
            more.
          </h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your email address" />
            <button type="submit" className="submit-btn">
              Sign Up
            </button>
          </form>
        </StyledNewsletter>
      </section>
      <Footer />
    </StyledFlex>
  );
}
