/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import tw, { theme } from 'twin.macro';

export const Styled404 = styled.section`
  ${tw`
    py-28
    text-center
    flex
    flex-col
    gap-y-4
    md:gap-y-6
`}

  .nf-img {
    object-fit: cover;
    height: 15rem;
    margin: 0 auto;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    font-size: 1.4rem;
  }

  @media screen and (min-width: 768px) {
    .nf-img {
      height: 20rem;
    }
  }
`;

export const Styled404Nav = styled.nav`
  ${tw`
  flex
  flex-col
  gap-y-6
  text-lg
  font-medium
  justify-center
  md:flex-row
  md:gap-x-6
  lg:gap-x-9
`}
  place-items: center;

  .nf-link:hover {
    color: ${theme`colors.orange_soda`};
    transition: all 0.5s ease-in-out;
  }
`;
