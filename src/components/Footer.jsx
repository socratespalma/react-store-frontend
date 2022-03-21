import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <Link to="/policies/terms-of-service">Terms of service</Link>
      <Link to="/policies/privacy-policy">Privacy policy</Link>
      <Link to="/policies/shipping-policy">Shipping policy</Link>
      <Link to="/policies/return-policy">Return policy</Link>
      <Link to="/pages/help">FAQs</Link>
      <Link to="/pages/about-us">About us</Link>
      <Link to="/pages/contact-us">Contact us</Link>
      <section>
        <FaFacebook />
        <FaInstagram />
        <FaWhatsapp />
      </section>
    </div>
  );
}
