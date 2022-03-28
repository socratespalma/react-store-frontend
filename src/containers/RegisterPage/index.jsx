/* eslint-disable import/no-unresolved */
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import React from 'react';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <div>
      <Header />
      <h1>Create a new account</h1>
      <form>
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
      </form>
      <Link to="/account/login">Back to login</Link>
      <Footer />
    </div>
  );
}
