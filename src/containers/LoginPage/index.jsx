/* eslint-disable import/no-unresolved */
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div>
      <Header />
      <h1>Login</h1>
      <form>
        <input type="email" name="" id="" placeholder="Enter your email" />
        <input
          type="password"
          name=""
          id=""
          placeholder="Enter your password"
        />
        <button type="submit">Log in</button>
      </form>
      <Link to="/account/forgot-password">Forgot your password?</Link>
      <Link to="/account/register">Create a new account</Link>
      <Footer />
    </div>
  );
}
