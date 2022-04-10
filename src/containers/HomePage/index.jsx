/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import boina from '@assets/img/boinaAmarilla.jpg';
import bolsa from '@assets/img/BolsasConchas.jpg';
import calcetas from '@assets/img/calcetasMesh.jpg';
import collars from '@assets/img/Cuellos.jpg';
import mochila from '@assets/img/Mochila.jpg';
import vestido from '@assets/img/vestidoLucy.jpg';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
// import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { StyledFlex } from '@styles/Flex.styled';
import React from 'react';
import { BiWorld } from 'react-icons/bi';
import { FaInstagram, FaStar } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import {
  StyledCarrousel,
  StyledFeatures,
  StyledHero,
  StyledInsta,
  StyledMainCopy,
  StyledNewsletter,
  StyledProductGrid,
  StyledProducts
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
        <StyledProducts>
          <h1>Featured products</h1>
          {/* 
          To do: create an object with all the options
           */}
          <StyledCarrousel>
            <Splide
              options={{
                type: 'loop',
                gap: '1rem',
                perPage: 4,
                breakpoints: {
                  720: {
                    perPage: 2
                  }
                },
                perMove: 1,
                // padding: { left: '3rem', right: '3rem' },
                autoplay: true,
                pauseOnHover: false,
                resetProgress: false,
                arrows: 'slider'
                // height: '15rem'
              }}
              hasSliderWrapper
            >
              <SplideSlide>
                <img src={collars} alt="Collar 1" />
                {/* <h1>1</h1> */}
              </SplideSlide>
              <SplideSlide>
                <img src={boina} alt="Collar 2" />
                {/* <h1>2</h1> */}
              </SplideSlide>
              <SplideSlide>
                <img src={mochila} alt="Collar 2" />
                {/* <h1>3</h1> */}
              </SplideSlide>
              <SplideSlide>
                <img src={vestido} alt="Collar 2" />
                {/* <h1>4</h1> */}
              </SplideSlide>
              <SplideSlide>
                <img src={bolsa} alt="Collar 2" />
                {/* <h1>5</h1> */}
              </SplideSlide>
              <SplideSlide>
                <img src={calcetas} alt="Collar 2" />
                {/* <h1>5</h1> */}
              </SplideSlide>
            </Splide>
          </StyledCarrousel>
          <h1>New arrivals</h1>
          <StyledCarrousel>
            <Splide
              options={{
                type: 'loop',
                gap: '1rem',
                perPage: 5,
                breakpoints: {
                  720: {
                    perPage: 2
                  }
                },
                perMove: 1,
                // padding: { left: '3rem', right: '3rem' },
                autoplay: true,
                pauseOnHover: false,
                resetProgress: false,
                arrows: 'slider'
                // height: '15rem'
              }}
              hasSliderWrapper
            >
              <SplideSlide>
                <img src={collars} alt="Collar 1" />
                {/* <h1>1</h1> */}
              </SplideSlide>
              <SplideSlide>
                <img src={boina} alt="Collar 2" />
                {/* <h1>2</h1> */}
              </SplideSlide>
              <SplideSlide>
                <img src={mochila} alt="Collar 2" />
                {/* <h1>3</h1> */}
              </SplideSlide>
              <SplideSlide>
                <img src={vestido} alt="Collar 2" />
                {/* <h1>4</h1> */}
              </SplideSlide>
              <SplideSlide>
                <img src={bolsa} alt="Collar 2" />
                {/* <h1>5</h1> */}
              </SplideSlide>
              <SplideSlide>
                <img src={calcetas} alt="Collar 2" />
                {/* <h1>5</h1> */}
              </SplideSlide>
            </Splide>
          </StyledCarrousel>

          <h1>Shop by category</h1>
          <StyledProductGrid>
            <figure>
              <img src={bolsa} alt="Collar 2" />
              <p>Dresses</p>
            </figure>
            <figure>
              <img src={bolsa} alt="Collar 2" />
              <p>Accesories</p>
            </figure>
            <figure>
              <img src={bolsa} alt="Collar 2" />
              <p>Shirts</p>
            </figure>
            <figure>
              <img src={bolsa} alt="Collar 2" />
              <p>Shoes</p>
            </figure>
            <figure>
              <img src={bolsa} alt="Collar 2" />
              <p>Skirts</p>
            </figure>
            <figure>
              <img src={bolsa} alt="Collar 2" />
              <p>Hats</p>
            </figure>
          </StyledProductGrid>

          {/* these are the most popular, a carousel */}
        </StyledProducts>
        <div>
          {/* <h1>New arrivals</h1> */}
          {/* these are new items, a carousel */}
        </div>
        <div>
          {/* <h1>Shop by category</h1> */}
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
