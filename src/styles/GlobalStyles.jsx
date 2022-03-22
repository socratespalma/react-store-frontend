import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles, theme } from 'twin.macro';
import HelloVintage from '../assets/fonts/HelloVintage.ttf';

const CustomStyles = createGlobalStyle({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`
  }
});

const LogoStyles = createGlobalStyle`
@font-face {
  font-family: 'HelloVintage';
  src: url(${HelloVintage});
}
`;

export default function GlobalStyles() {
  return (
    <>
      <BaseStyles />
      <CustomStyles />
      <LogoStyles />
    </>
  );
}
