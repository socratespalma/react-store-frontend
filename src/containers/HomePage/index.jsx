/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import boina from '@assets/img/boinaAmarilla.jpg';
import bolsa from '@assets/img/BolsasConchas.jpg';
import calcetas from '@assets/img/calcetasMesh.jpg';
import collars from '@assets/img/Cuellos.jpg';
import mochila from '@assets/img/Mochila.jpg';
import vestido from '@assets/img/vestidoLucy.jpg';
import Card from '@components/common/Card';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import Hero from '@components/layout/Hero';
import Newsletter from '@components/layout/Newsletter';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
// import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { StyledFlex } from '@styles/Flex.styled';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
  StyledCarrousel,
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
