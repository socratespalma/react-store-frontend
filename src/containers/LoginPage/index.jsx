/* eslint-disable import/no-unresolved */
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div>
      <Header />
      <h1>this is login page</h1>
      <Link to="/account/forgot-password">Forgot your password?</Link>
      <Link to="/account/register">Create a new account</Link>
      <Footer />
    </div>
  );
}
