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

export const StyledProducts = styled.div`
  h1 {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin-top: 6rem;
  }
`;

export const StyledCarrousel = styled.div`
  ${tw`
  mx-16
  my-10
`}
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

  img {
    object-fit: cover;
    /* position: relative; */
    /* width: 10rem;
    height: 10rem; */
  }

  p {
    /* bottom: 100px; */
    /* z-index: 50; */
    color: white;
    font-size: 3rem;
    font-weight: 600;
    /* background-color: rebeccapurple; */
    position: relative;
    /* padding: 6rem; */
    text-align: center;
    bottom: 50%;
    /* left: 50%; */
    /* top: 50%; */
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

  section {
    background-color: white;
    padding: 2rem;
    width: 18rem;
    height: 15rem;
    text-align: center;
    box-shadow: 6px 6px 18px 0 rgba(0, 0, 0, 0.15);

    h3 {
      font-weight: 600;
      font-size: 1.2rem;
      /* text-transform: uppercase; */
      margin: 0.5rem 0;
    }

    p {
      font-weight: 300;
      /* font-size: 0.9rem; */
      color: ${theme`colors.independence`};
    }
  }

  .icon-feature {
    font-size: 2.5rem;
    /* background-color: ${tw`bg-orange_soda`}; */
    color: ${theme`colors.independence`};
    margin: 0 auto;
  }
`;

// export const DivCenter = styled.div`
//   ${tw`
// text-center
// `}
// `;

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

export const StyledNewsletter = styled.div`
  ${tw`
    bg-mauve
    px-10
    py-24
    flex
    flex-col
    text-center
    gap-6
`}

  h1 {
    font-size: 1.6rem;
    font-weight: 500;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 300;
  }

  input[type='text'] {
    padding: 0.5rem;
    width: 20rem;
    border: solid 1px #d3d3d3;
  }

  .submit-btn {
    background-color: ${theme`colors.independence`};
    color: #fff;
    padding: 0.5rem;
    width: 5rem;
    border: solid 1px ${theme`colors.dark_gray`};
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
