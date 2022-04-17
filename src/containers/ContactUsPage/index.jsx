/* eslint-disable import/no-unresolved */
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import { StyledFlex } from '@styles/Flex.styled';
import React from 'react';
import { MdHelp, MdPolicy } from 'react-icons/md';
import { Link } from 'react-router-dom';
import {
  StyledContact,
  StyledContactForm,
  StyledContactRedirect,
  StyledMainText,
  StyledSecondContact
} from './ContactUs.styled';

export default function ContactUsPage() {
  return (
    <StyledFlex>
      <Header />
      <StyledContact>
        <h1>Contact us</h1>
        <StyledMainText>
          <h2>Hours of operation</h2>
          <p>
            Customer Service Representatives are available:{' '}
            <span>Mon - Fri ( 8am - 5pm CST )</span>
          </p>
          <p>
            Email:{' '}
            <a href="mailto: support@amapolaescarlata.com">
              support@amapolaescarlata.com
            </a>
          </p>
        </StyledMainText>
        <p>
          Our Customer Service Team is open to assist you with any questions
          that you may have. Please complete the form below to send us your
          inquiry and one of our Customer Service Team will contact you as soon
          as posible.
        </p>
        <StyledContactForm>
          {/* TODO: 
              Form validation
              responsive web design
              select with css and options
          */}
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone Number" />
          <select>
            <option value="null">Choose a country</option>
            <option value="usa">United States</option>
            <option value="nic">Nicaragua</option>
          </select>
          <textarea name="" id="" placeholder="Message" />
          <button type="submit">Submit</button>
        </StyledContactForm>
        <StyledSecondContact>
          <StyledContactRedirect>
            <MdHelp className="icon" />
            <p>Need more answers?</p>
            <Link to="/pages/help" className="contact-redirect">
              Visit our FAQ Page
            </Link>
          </StyledContactRedirect>
          <StyledContactRedirect>
            <MdPolicy className="icon" />
            <p>Shipping policy</p>
            <Link to="/policies/shipping-policy" className="contact-redirect">
              Get more info
            </Link>
          </StyledContactRedirect>
        </StyledSecondContact>
      </StyledContact>
      <Footer />
    </StyledFlex>
  );
}
