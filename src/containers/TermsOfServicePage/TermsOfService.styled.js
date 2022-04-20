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
    padding-bottom: 1rem;
  }

  h2 {
    font-size: 1.3rem;
    padding: 1rem 0;
  }
`;

export const StyledBottom = styled.section`
  ${tw` pt-6 `}

  p {
    font-weight: 500;
  }
`;
