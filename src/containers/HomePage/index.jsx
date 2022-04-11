/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import Card from '@components/common/Card';
import Carousel from '@components/common/Carousel';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import Hero from '@components/layout/Hero';
import Newsletter from '@components/layout/Newsletter';
import { StyledFlex } from '@styles/Flex.styled';
import categories from '@utils/categories';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
  StyledFeatures,
  StyledInsta,
  StyledMainCopy,
  StyledProductGrid,
  StyledProducts
} from './HomePage.styled';

export default function HomePage() {
  return (
    <StyledFlex>
      <Header />
      <section>
        <Hero />
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

        <StyledProducts>
          <h1>Featured products</h1>
          <Carousel />

          <h1>New arrivals</h1>
          <Carousel />

          <h1>Shop by category</h1>
          <StyledProductGrid>
            {categories.map(({ id, name, image }) => (
              <figure key={id}>
                <img src={image} alt={name} />
                <p>{name}</p>
              </figure>
            ))}
          </StyledProductGrid>
        </StyledProducts>

        <StyledFeatures>
          <Card
            title="Quality and Durability"
            text="Our collections are made with high quality materials"
          />
          <Card
            title="24/7 Customer Support"
            text="We help people with all their doubts"
          />
          <Card
            title="Worldwide Shipping"
            text="We provide free shipping in orders over 99$"
          />
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
        <Newsletter />
      </section>
      <Footer />
    </StyledFlex>
  );
}
