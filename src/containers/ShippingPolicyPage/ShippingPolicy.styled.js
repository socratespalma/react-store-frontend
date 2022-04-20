/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledTop = styled.section`
  ${tw`
    font-bold
    text-lg  
`}

  h1 {
    font-size: 2rem;
    text-align: center;
  }

  h2 {
    padding: 1.5rem 0;
    font-size: 1.3;
  }
`;

export const StyledBottom = styled.section`
  ${tw` pt-6 `}

  h2 {
    font-size: 1.3rem;
    text-decoration: underline;
  }

  p {
    font-weight: 500;
    font-size: 1.1rem;
    padding: 0.5rem 0;
  }
`;
