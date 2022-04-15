/* eslint-disable import/no-unresolved */
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import { StyledFlex } from '@styles/Flex.styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledRecovery, StyledRecoveryForm } from './ForgotPassword.styled';

export default function ForgotPasswordPage() {
  return (
    <StyledFlex>
      <Header />
      <StyledRecovery>
        <StyledRecoveryForm>
          <h1>Password recovery</h1>
          <h2>We will send you an email to reset your password</h2>

          <input type="email" name="" id="" placeholder="Enter your email" />
          <button type="submit">Submit</button>

          <Link to="/account/login" className="form-links">
            Back to login
          </Link>
          <Link to="/" className="form-links">
            Return to store
          </Link>
        </StyledRecoveryForm>
      </StyledRecovery>

      <Footer />
    </StyledFlex>
  );
}
