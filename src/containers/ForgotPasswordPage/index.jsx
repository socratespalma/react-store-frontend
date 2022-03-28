/* eslint-disable import/no-unresolved */
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import React from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPasswordPage() {
  return (
    <div>
      <Header />
      <h1>Password recovery</h1>
      <h2>We will send you an email to reset your password</h2>
      <form>
        <input type="email" name="" id="" placeholder="Enter your email" />
        <button type="submit">Submit</button>
      </form>
      <Link to="/account/login">Back to login</Link>
      <Footer />
    </div>
  );
}
