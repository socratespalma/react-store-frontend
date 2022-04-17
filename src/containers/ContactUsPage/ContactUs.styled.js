/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import tw, { theme } from 'twin.macro';

export const StyledContact = styled.section`
  ${tw`
    py-28
    px-16
    lg:p-44
  `}

  h1 {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 600;
    /* text-align: center; */
  }
`;

export const StyledMainText = styled.article`
  ${tw`
    py-9
  `}

  h2 {
    font-size: 1.4rem;
    text-transform: capitalize;
  }

  a,
  span {
    font-weight: 600;
  }

  p {
    color: ${theme`colors.independence`};
    padding-top: 0.5rem;
  }
`;

export const StyledContactForm = styled.div`
  ${tw`
    flex
    flex-col
    gap-y-2
    py-9
  `}

  input, select, textarea {
    padding: 0.5rem 0.7rem;
    width: 100%;
    border: solid 1px #d3d3d3;
    border-radius: 3px;
  }

  textarea {
    resize: none;
  }

  button {
    padding: 0.5rem 0.7rem;
    width: 100%;
    border-radius: 3px;
    color: ${theme`colors.white`};
    background-color: ${theme`colors.independence`};
  }
`;

export const StyledSecondContact = styled.section`
  ${tw`
  flex
  gap-x-9

`}

  .icon {
    font-size: 2rem;
  }

  .contact-redirect {
    font-size: 0.9rem;
    color: ${theme`colors.independence`};
  }
`;

export const StyledContactRedirect = styled.div`
  ${tw`
    flex
    flex-col
    gap-y-2
  `}
`;
