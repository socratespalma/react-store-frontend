/* eslint-disable import/no-unresolved */
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import { StyledFlex } from '@styles/Flex.styled';
import React from 'react';
import { BiWorld } from 'react-icons/bi';
import { FaInstagram, FaStar } from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledFlex>
      <Header />
      <section>
        <div>
          <h1>Hero</h1>
          <h2>We stand out by thinking differently</h2>
          <h3>We provide the best experience to our customers</h3>
          <Link to="/">Learn more</Link>
        </div>
        <div>
          <p>
            We are an online store that sells vintage clothing and accesories
            for women who want to stand out from the crowd with their unique
            style. Our work is to provide a path for the modern woman to bring
            the attention on every room with quality pieces.
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
        <div>
          <h1>Features section</h1>
          <FaStar />
          <h3>Quality and durability</h3>
          <RiCustomerService2Fill />
          <h3>24/7 customer support</h3>
          <BiWorld />
          <h3>Worldwide shipping</h3>
        </div>
        <div>
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
        </div>
        <div>
          <h1>Subscribe to our newsletter</h1>
          <h2>
            Sign up for our newsletter to get exclusive deals, discounts, and
            more.
          </h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your email address" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
      <Footer />
    </StyledFlex>
  );
}
