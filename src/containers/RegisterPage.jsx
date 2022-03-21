import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

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
