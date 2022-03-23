/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledHeader = styled.div`
  ${tw`
    bg-[#f4f4f4]
    text-2xl
    text-[#0f1525]
    font-bold
    flex
    justify-between
    items-center
  `}
  padding: 1rem 3rem;
`;

export const StyledHeaderIcons = styled.section`
  ${tw`
    flex
    justify-between
    w-32
  `}
`;

export const StyledLogo = styled.div`
  ${tw`
    flex
    items-center
    justify-between
    w-52
  `}
  font-family: 'HelloVintage', sans-serif;
`;
