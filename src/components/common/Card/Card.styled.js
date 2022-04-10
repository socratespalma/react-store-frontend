/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { theme } from 'twin.macro';

export const StyledCard = styled.section`
  background-color: white;
  padding: 2rem;
  width: 18rem;
  height: 15rem;
  text-align: center;
  box-shadow: 6px 6px 18px 0 rgba(0, 0, 0, 0.15);

  h3 {
    font-weight: 600;
    font-size: 1.2rem;
    /* text-transform: uppercase; */
    margin: 0.5rem 0;
  }

  p {
    font-weight: 300;
    /* font-size: 0.9rem; */
    color: ${theme`colors.independence`};
  }

  .icon-feature {
    font-size: 2.5rem;
    color: ${theme`colors.independence`};
    margin: 0 auto;
  }
`;
