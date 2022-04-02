/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledHero = styled.div`
  ${tw`
bg-cotton_candy
`}
`;

export const StyledFeatures = styled.div`
  ${tw`
    flex
    flex-col
    lg:flex-row
    lg:justify-center
    gap-10
    bg-light_gray
    py-20
    `}

  place-items: center;

  section {
    background-color: white;
    padding: 2rem;
    border-radius: 0.5rem;
    width: 18rem;
    text-align: center;
    box-shadow: 1px 1px 10px 1px #a9a9a9;

    h3 {
      font-weight: 600;
      margin: 0.5rem 0;
    }
  }

  .icon-feature {
    font-size: 2.5rem;
    margin: 0 auto;
  }
`;

export const DivCenter = styled.div`
  ${tw`
text-center
`}
`;

export const StyledNewsletter = styled.div`
  ${tw`
    bg-orange_soda
`}
`;
