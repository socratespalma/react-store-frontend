/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledNavbar = styled.nav`
  ${tw`
        font-medium
        text-lg
        // w-64
    `}

  ul {
    width: 30rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
