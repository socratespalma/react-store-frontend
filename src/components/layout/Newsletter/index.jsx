import React from 'react';
import { StyledNewsletter } from './Newsletter.styled';

export default function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledNewsletter>
      <h1>Subscribe to our newsletter</h1>
      <h2>
        Sign up for our newsletter to get exclusive deals, discounts, and more.
      </h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your email address" />
        <button type="submit" className="submit-btn">
          Sign Up
        </button>
      </form>
    </StyledNewsletter>
  );
}
