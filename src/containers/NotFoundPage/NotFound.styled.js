/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import tw, { theme } from 'twin.macro';

export const Styled404 = styled.section`
  ${tw`
    py-28
    text-center
    flex
    flex-col
    gap-y-6
`}

  .nf-img {
    object-fit: cover;
    height: 15rem;
    margin: 0 auto;
  }

  h1 {
    font-size: 1.4rem;
    font-weight: 600;
    color: ${theme`colors.independence`};
  }

  p {
    font-size: 1.2rem;
    color: ${theme`colors.independence`};
  }
`;
