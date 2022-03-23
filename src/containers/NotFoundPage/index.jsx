/* eslint-disable import/no-unresolved */
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import React from 'react';

export default function NotFoundPage() {
  return (
    <div>
      <Header />
      <h1>Oops, we couldn&apos;t find that page!</h1>
      <Footer />
    </div>
  );
}
