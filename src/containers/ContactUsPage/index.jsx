/* eslint-disable import/no-unresolved */
import Textfield from '@components/auth/Textfield';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import { StyledFlex } from '@styles/Flex.styled';
import countries from '@utils/countries';
import titles from '@utils/titles';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Notiflix from 'notiflix';
import React from 'react';
import { MdHelp, MdPolicy, MdRealEstateAgent } from 'react-icons/md';
import { Link } from 'react-router-dom';
import contactSchema from './contact.validation';
import {
  StyledContact,
  StyledContactForm,
  StyledContactRedirect,
  StyledMainText,
  StyledSecondContact
} from './ContactUs.styled';

export default function ContactUsPage() {
  const initialValues = {
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  };

  const countryOptions = countries.map(({ id, name }) => (
    <option value={name} key={id}>
      {name}
    </option>
  ));

  const titleOptions = titles.map(({ id, option }) => (
    <option value={option} key={id}>
      {option}
    </option>
  ));

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
        <Formik
          initialValues={initialValues}
          validationSchema={contactSchema}
          onSubmit={(values, { resetForm }) => {
            Notiflix.Report.success(
              'Message sent successfully',
              'We will respond to your message as soon as posible',
              'Ok'
            );
            resetForm();
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            dirty,
            isValid,
            errors,
            touched
          }) => (
            <StyledContactForm>
              <Form
                onSubmit={handleSubmit}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
                className="contact-form"
              >
                <div className="fr-md fr-lg">
                  <Field
                    name="title"
                    as="select"
                    className={`${
                      errors.title && touched.title ? 'invalid' : null
                    } dropdown`}
                  >
                    <option value="">Title</option>
                    {titleOptions}
                  </Field>
                  <ErrorMessage
                    component="div"
                    name="title"
                    className="error"
                  />
                </div>
                <Textfield
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  className={`${
                    errors.firstName && touched.firstName ? 'invalid' : null
                  } fr-md fr-lg`}
                />
                <Textfield
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  className={`${
                    errors.lastName && touched.lastName ? 'invalid' : null
                  } sr-md fr-lg`}
                />
                <Textfield
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={`${
                    errors.email && touched.email ? 'invalid' : null
                  } sr-md sr-lg`}
                />
                <div className="tr-md sr-lg">
                  <Field
                    name="country"
                    as="select"
                    className={`${
                      errors.country && touched.country ? 'invalid' : null
                    } dropdown`}
                  >
                    <option value="">Country</option>
                    {countryOptions}
                  </Field>
                  <ErrorMessage
                    component="div"
                    name="country"
                    className="error"
                  />
                </div>
                <Textfield
                  name="phone"
                  type="text"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  className={`${
                    errors.phone && touched.phone ? 'invalid' : null
                  } tr-md sr-lg`}
                />
                <div className="four-md tr-lg">
                  <Field
                    name="message"
                    as="textarea"
                    className={
                      errors.message && touched.message ? 'invalid' : null
                    }
                    placeholder="Message"
                  />
                  <ErrorMessage
                    component="div"
                    name="message"
                    className="error"
                  />
                </div>
                <button
                  disabled={!(dirty && isValid)}
                  type="submit"
                  className={
                    !(dirty && isValid) ? 'disabled-btn' : 'submit-btn'
                  }
                >
                  Submit
                </button>
              </Form>
            </StyledContactForm>
          )}
        </Formik>

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
