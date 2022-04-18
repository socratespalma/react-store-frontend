/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import tw, { theme } from 'twin.macro';

export const StyledContact = styled.section`
  ${tw`
    py-28
    px-16
    lg:flex
    lg:flex-col
    lg:justify-center
    lg:px-36
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
    py-9
  `}

  .contact-form {
    ${tw`
    grid
    grid-cols-1
    gap-y-2
    sm:grid-rows-[7]
    sm:grid-cols-2
    sm:gap-2
    lg:grid-rows-4
    lg:grid-cols-3
    lg:gap-3
    `}

    .invalid {
      border: solid 1px red !important;
    }

    @media screen and (min-width: 640px) {
      .fr-md {
        grid-row: 1/2;
      }
      .sr-md {
        grid-row: 2/3;
      }
      .tr-md {
        grid-row: 3/4;
      }
      .four-md {
        grid-row: 4/6;
        grid-column: 1/-1;
      }
      button {
        grid-row: 6/8;
        grid-column: 2/-1;
        width: 50%;
        justify-self: end;
        align-self: stretch;
      }
    }

    @media screen and (min-width: 1024px) {
      .fr-lg {
        grid-row: 1/2;
      }

      .sr-lg {
        grid-row: 2/3;
      }

      .tr-lg {
        grid-row: 3/5;
        grid-column: 1/-1;
      }

      button {
        grid-row: 5/-1;
        grid-column: 3/-1;
        width: 50%;
        justify-self: end;
        align-self: stretch;
      }
    }

    @media screen and (min-width: 1440px) {
      width: 70rem;
    }
  }

  input,
  select,
  textarea {
    padding: 0.5rem 0.7rem;
    width: 100%;
    border: solid 1px #d3d3d3;
    border-radius: 3px;
  }

  select {
    background-color: white;
    /* border: thin solid blue; */
    /* border-radius: 4px; */
    display: inline-block;
    /* font: inherit; */
    /* line-height: 1.5em; */
    /* padding: 0.5em 3.5em 0.5em 1em; */

    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }

  .error {
    color: red;
  }

  .disabled-btn {
    background-color: ${theme`colors.orange_soda`};
    color: white;
  }

  .submit-btn {
    color: ${theme`colors.white`};
    background-color: ${theme`colors.independence`};
  }

  .dropdown {
    cursor: pointer;
    background-image: linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;

    &:focus {
      background-image: linear-gradient(45deg, gray 50%, transparent 50%),
        linear-gradient(135deg, transparent 50%, gray 50%),
        linear-gradient(to right, #ccc, #ccc);
      background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em,
        calc(100% - 2.5em) 0.5em;
      background-size: 5px 5px, 5px 5px, 1px 1.5em;
      background-repeat: no-repeat;
      /* outline: 0; */
    }
  }

  textarea {
    resize: none;
  }

  button {
    padding: 0.5rem 0.7rem;
    width: 100%;
    border-radius: 3px;
  }
`;

export const StyledSecondContact = styled.section`
  ${tw`
  flex
  flex-wrap
  gap-9

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
