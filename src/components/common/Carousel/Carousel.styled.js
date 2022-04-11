/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledCarousel = styled.div`
  ${tw`
  mx-16
  my-10
`}

  img {
    border-radius: 50%;
    box-shadow: 3px 3px 8px 0 rgba(0, 0, 0, 0.15);
  }
`;
