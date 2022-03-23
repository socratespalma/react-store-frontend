/* eslint-disable import/no-unresolved */
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import React from 'react';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <div>
      <Header />
      <h1>This is register page</h1>
      <Link to="/account/login">Back to login</Link>
      <Footer />
    </div>
  );
}
