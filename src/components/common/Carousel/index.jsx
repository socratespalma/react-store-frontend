/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import products from '@utils/products';
import React from 'react';
import { StyledCarousel } from './Carousel.styled';

export default function Carousel() {
  const options = {
    type: 'loop',
    gap: '2rem',
    perPage: 5,
    breakpoints: {
      768: {
        perPage: 2
      }
    },
    padding: { left: '1rem', right: '1rem' },
    perMove: 1,
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    arrows: 'slider'
  };

  return (
    <StyledCarousel>
      <Splide options={options} hasSliderWrapper>
        {products.map(({ id, name, image }) => (
          <SplideSlide key={id}>
            <img src={image} alt={name} />
          </SplideSlide>
        ))}
      </Splide>
    </StyledCarousel>
  );
}
