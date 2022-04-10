/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import hero from '@assets/img/Hero.jpg';
import styled from 'styled-components';
import tw, { theme } from 'twin.macro';

export const StyledHero = styled.div`
  ${tw`
  h-screen
  bg-left-top
  bg-cover
  bg-no-repeat
  flex
  flex-col
  justify-center
  text-center
  lg:items-start
  items-center
  text-white
  gap-6
  px-4
  lg:px-10
`}
  background-image: url(${hero});

  h1 {
    font-size: 2.3rem;
    font-weight: 600;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 300;
  }

  .hero-cta {
    background-color: ${theme`colors.white`};
    color: ${theme`colors.dark_gray`};
    font-weight: 500;
    padding: 0.8rem;
    width: 9rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;

    .chevron {
      font-size: 1.5rem;
      font-weight: 500;
    }

    &:hover {
      background-color: transparent;
      color: ${theme`colors.white`};
      text-decoration: underline;
      transition: all 0.5s ease-in-out;
    }
  }

  .main-verb {
    color: ${theme`colors.mauve`};
    text-decoration: underline;
  }
`;
