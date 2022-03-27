import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledFooter = styled.div`
  ${tw`
    bg-[#f4f4f4]
    px-16
    py-8
  `}
`;

export const StyledSocialIcons = styled.section`
  ${tw`
    flex
    text-3xl
    gap-x-3
  `}
`;

export const StyledFooterNavs = styled.nav`
  ${tw`
  flex
  flex-col
  w-52
  gap-2
`}

  h2 {
    font-weight: 500;
  }

  .navlink:hover {
    color: #4a4e69;
  }
`;

export const StyledFooterGrid = styled.section`
  ${tw`
  grid
  gap-y-8
  py-8
`}
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
`;

export const StyledFooterLogo = styled.div`
  ${tw`
  text-2xl
  font-semibold
  text-[#0f1525]
`}
  font-family: 'HelloVintage', sans-serif;
`;

export const StyledCopyright = styled.div`
  ${tw`
  text-center
  pb-8
  text-[#4a4e69]
  text-sm
`}
`;
