/* eslint-disable import/no-unresolved */
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import { StyledFlex } from '@styles/Flex.styled';
import React from 'react';
import { MdHelp, MdPolicy, MdRealEstateAgent } from 'react-icons/md';
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
          */}
          <select className="dropdown fr-md fr-lg">
            <option value="">Title</option>
            <option value="">Ms</option>
            <option value="">Mrs</option>
            <option value="">Miss</option>
            <option value="">Mr</option>
          </select>
          <input className="fr-md fr-lg" type="text" placeholder="First Name" />
          <input className="sr-md fr-lg" type="text" placeholder="Last Name" />
          <input
            className="sr-md sr-lg"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="tr-md sr-lg"
            type="tel"
            placeholder="Phone Number"
          />
          <select className="dropdown tr-md sr-lg">
            <option value="">Country</option>
            <option value="usa">United States</option>
            <option value="canada">Canada</option>
            <option value="nic">Nicaragua</option>
          </select>
          <textarea
            className="four-md tr-lg"
            name=""
            id=""
            placeholder="Message"
          />
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
            <p>Return policy</p>
            <Link to="/policies/return-policy" className="contact-redirect">
              Get more info
            </Link>
          </StyledContactRedirect>
          <StyledContactRedirect>
            <MdRealEstateAgent className="icon" />
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
