/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledHeader = styled.div`
  ${tw`
    bg-light_gray
    text-2xl
    text-dark_gray
    font-bold
    flex
    justify-between
    items-center
    w-full
    top-0
    fixed
    z-[100]
    h-[4.5rem]
    py-4
    px-8
  `}

  .logo {
    width: 3.3rem;
  }

  @media screen and (min-width: 1024px) {
    height: 5rem;
    padding: 1rem 3rem;
  }
`;

export const StyledLogo = styled.div`
  ${tw`
    flex
    items-center
    justify-between
    w-52
  `}

  z-index: 90;
  font-family: 'HelloVintage', sans-serif;
`;
