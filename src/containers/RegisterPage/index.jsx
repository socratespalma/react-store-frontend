/* eslint-disable import/no-unresolved */
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import { StyledFlex } from '@styles/Flex.styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledRegister, StyledRegisterForm } from './Register.styled';

export default function RegisterPage() {
  return (
    <StyledFlex>
      <Header />
      <StyledRegister>
        <StyledRegisterForm>
          <h1>Create account</h1>
          <input type="text" placeholder="Enter your username" />
          <input type="email" name="" id="" placeholder="Enter your email" />
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter your password"
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Confirm your password"
          />
          <button type="submit">Sign up</button>

          <Link to="/account/login" className="form-links">
            Back to login
          </Link>
          <Link to="/" className="form-links">
            Return to store
          </Link>
        </StyledRegisterForm>
      </StyledRegister>

      <Footer />
    </StyledFlex>
  );
}
