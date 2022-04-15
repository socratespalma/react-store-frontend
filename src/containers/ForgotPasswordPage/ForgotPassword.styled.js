/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import tw, { theme } from 'twin.macro';

export const StyledRecovery = styled.section`
  ${tw`
    flex
    flex-col
    justify-center
    items-center
    h-screen
`}
`;

export const StyledRecoveryForm = styled.form`
  ${tw`
    flex
    flex-col
    // border
    justify-center
    items-center
    w-96
    gap-3
`}

  h1 {
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    padding-bottom: 1rem;
  }

  h2 {
    /* font-size: 1.3rem; */
    color: ${theme`colors.independence`};
  }

  input[type='email'],
  input[type='text'],
  input[type='password'] {
    padding: 0.5rem 0.7rem;
    width: 100%;
    border: solid 1px #d3d3d3;
    border-radius: 3px;
  }

  button {
    width: 100%;
    padding: 0.5rem 0.7rem;
    border-radius: 3px;
    font-weight: 600;
    color: ${theme`colors.white`};
    background-color: ${theme`colors.independence`};
  }

  .form-links {
    ${tw`
        text-lg
      `}
    padding-bottom: 0.3rem;

    &:nth-of-type(1) {
      padding-top: 1.5rem;
    }

    &:hover {
      color: ${theme`colors.independence`};
      transition: all 0.5s ease-in-out;
    }
  }
`;
