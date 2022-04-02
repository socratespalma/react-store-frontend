import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { GlobalStyles as BaseStyles } from 'twin.macro';
import HelloVintage from '../assets/fonts/HelloVintage.ttf';

const CustomStyles = createGlobalStyle({
  body: {
    fontFamily: 'Nunito'
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
