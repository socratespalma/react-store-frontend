/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import tw, { theme } from 'twin.macro';

export const StyledNavbar = styled.nav`
  ${tw`
        fixed
        top-0
        left-0
        w-screen
        opacity-[0.98]
        invisible
    `}

  .menu-nav {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    background-color: ${theme`colors.light_gray`};
    list-style: none;
    padding-right: 1rem;
    transform: translateX(-100%);
    transition: all 0.5s ease-in-out;
  }

  .navlink {
    text-decoration: none;
    color: ${theme`colors.dark_gray`};
    display: inline-block;
    font-size: 1.2rem;
    padding: 1.5rem 0;
    font-weight: 500;
  }

  .navlink:hover {
    color: ${theme`colors.orange_soda`};
    transition: all 0.5s ease-in-out;
  }

  @media screen and (min-width: 1024px) {
    nav {
      visibility: visible;
    }

    .menu-nav {
      display: block;
      transform: translateY(0);
      height: 100%;
      background-color: transparent;
      text-align: right;
      margin-right: 12rem;
    }

    .navitem {
      display: inline;
      padding-right: 1.5rem;
    }
  }
`;

export const StyledNavIcons = styled.section`
  ${tw`
    flex
    gap-6
    z-[90]
  `}

  @media screen and (min-width: 1024px) {
    .menu-btn {
      visibility: hidden;
    }
  }
`;
