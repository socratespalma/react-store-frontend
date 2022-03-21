import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

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
