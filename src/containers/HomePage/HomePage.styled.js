/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
// import hero from '@assets/img/Hero.jpg';
import styled from 'styled-components';
import tw, { theme } from 'twin.macro';

export const StyledProducts = styled.div`
  h1 {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin-top: 6rem;
  }
`;

export const StyledProductGrid = styled.div`
  ${tw`
  grid
  pt-8
  pb-16
  px-40
  gap-x-9
  // grid-cols-3
`}
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  /* place-items: center; */
  justify-content: center;

  img {
    object-fit: cover;
    cursor: pointer;
    box-shadow: 6px 6px 18px 0 rgba(0, 0, 0, 0.15);
    /* opacity: 0.7; */

    /* position: relative; */
    /* width: 10rem;
    height: 10rem; */
  }

  p {
    /* bottom: 100px; */
    /* z-index: 50; */
    color: white;
    font-size: 2.5rem;
    font-weight: 600;
    text-transform: uppercase;
    /* background-color: rebeccapurple; */
    position: relative;
    /* padding: 6rem; */
    text-align: center;
    bottom: 50%;
    /* left: 50%; */
    /* top: 50%; */
  }

  @media screen and (min-width: 320px) {
    p {
      font-size: 2rem;
    }
  }
`;

export const StyledFeatures = styled.div`
  ${tw`
    flex
    flex-col
    lg:flex-row
    lg:justify-center
    gap-10
    bg-light_gray
    py-20
    `}

  place-items: center;
`;

export const StyledInsta = styled.div`
  ${tw`
  px-10
  py-20
  flex
  flex-col
  text-center
  gap-5
  
`}

  h1 {
    font-size: 1.6rem;
    font-weight: 500;
  }

  h2 {
    font-size: 1.3rem;
    font-weight: 300;
  }

  .insta-username {
    color: ${theme`colors.independence`};
  }

  .cta {
    background-color: ${theme`colors.independence`};
    color: white;
    font-weight: 500;
    padding: 0.8rem;
    width: 9rem;
    border-radius: 0.5rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;

    .chevron {
      font-size: 1.5rem;
      font-weight: 500;
    }

    &:hover {
      background-color: ${theme`colors.white`};
      color: ${theme`colors.dark_gray`};
      text-decoration: underline;
      transition: all 0.5s ease-in-out;
    }
  }

  .icon-instasection {
    margin: 0 auto;
    font-size: 3rem;
  }
`;

export const StyledMainCopy = styled.div`
  ${tw`
  bg-cotton_candy
  text-dark_gray
  py-20
  px-10
  lg:px-44
  flex
  flex-col
  text-center
  gap-6
`}

  h1 {
    font-size: 2rem;
    font-weight: 600;
  }

  p {
    font-weight: 300;
    /* font-size: 0.9rem; */
  }

  .cta {
    background-color: ${theme`colors.white`};
    color: ${theme`colors.dark_gray`};
    font-weight: 500;
    padding: 0.8rem;
    width: 9rem;
    border-radius: 0.5rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;

    .chevron {
      font-size: 1.5rem;
      font-weight: 500;
    }

    &:hover {
      background-color: ${theme`colors.cotton_candy`};
      color: ${theme`colors.dark_gray`};
      text-decoration: underline;
      transition: all 0.5s ease-in-out;
    }
  }
`;
