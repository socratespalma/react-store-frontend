/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import tw, { theme } from 'twin.macro';

export const StyledHero = styled.div`
  ${tw`
bg-cotton_candy
`}
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

export const DivCenter = styled.div`
  ${tw`
text-center
`}
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

  .insta-cta {
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
    bg-cotton_candy
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
    /* font-weight: 300; */
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
