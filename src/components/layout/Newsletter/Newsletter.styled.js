/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import tw, { theme } from 'twin.macro';

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
