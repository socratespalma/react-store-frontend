/* eslint-disable import/no-unresolved */
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import { StyledFlex } from '@styles/Flex.styled';
import React from 'react';
import { BiWorld } from 'react-icons/bi';
import { FaInstagram, FaStar } from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import {
  DivCenter,
  StyledFeatures,
  StyledHero,
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
          <h1>Hero</h1>
          <h2>We stand out by thinking differently</h2>
          <h3>We provide the best experience to our customers</h3>
          <Link to="/">Learn more</Link>
        </StyledHero>
        <div>
          <p>
            We are an online store that sells vintage clothing and accesories
            for women who want to stand out from the crowd with their unique
            style.
          </p>
        </div>
        <div>
          <p>
            {' '}
            Our work is to provide a path for the modern woman to bring the
            attention on every room with quality pieces.
          </p>
        </div>
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
        <h1>Features section</h1>

        <StyledFeatures>
          <section>
            <FaStar className="icon-feature" />
            <h3>Quality and durability</h3>
            <p>Our collections are made with high quality materials </p>
          </section>
          <section>
            <RiCustomerService2Fill className="icon-feature" />
            <h3>24/7 customer support</h3>
            <p>We help people with all their doubts</p>
          </section>
          <section>
            <BiWorld className="icon-feature" />
            <h3>Worldwide shipping</h3>
            <p>We provide free shipping in orders over 99$</p>
          </section>
        </StyledFeatures>
        <DivCenter>
          <FaInstagram />
          <h1>Follow us on Instagram @amapola_escarlata</h1>
          <h2>Check out our favorite looks and inspiration here </h2>
          <a
            href="https://www.instagram.com/amapola_escarlata/"
            target="_blank"
            rel="noreferrer"
          >
            Learn more
          </a>
        </DivCenter>
        <StyledNewsletter>
          <DivCenter>
            <h1>Subscribe to our newsletter</h1>
            <h2>
              Sign up for our newsletter to get exclusive deals, discounts, and
              more.
            </h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Enter your email address" />
              <button type="submit">Submit</button>
            </form>
          </DivCenter>
        </StyledNewsletter>
      </section>
      <Footer />
    </StyledFlex>
  );
}
