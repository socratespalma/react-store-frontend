/* eslint-disable react/button-has-type */
/* eslint-disable import/no-unresolved */
import Textfield from '@components/auth/Textfield';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import { StyledFlex } from '@styles/Flex.styled';
import { Form, Formik } from 'formik';
import Notiflix from 'notiflix';
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledRecovery, StyledRecoveryForm } from './ForgotPassword.styled';
import recoverSchema from './recover.validation';

export default function ForgotPasswordPage() {
  const initialValues = { email: '' };

  return (
    <StyledFlex>
      <Header />
      <StyledRecovery>
        <Formik
          initialValues={initialValues}
          validationSchema={recoverSchema}
          onSubmit={() => {
            Notiflix.Notify.success('Email sent successfully');
          }}
        >
          {({
            handleSubmit,
            handleBlur,
            handleChange,
            values,
            dirty,
            isValid
          }) => (
            <StyledRecoveryForm>
              <h1>Password recovery</h1>
              <h2>We will send you an email to reset your password</h2>

              <Form
                className="form-control"
                onSubmit={handleSubmit}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
              >
                <Textfield
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <button
                  disabled={!(dirty && isValid)}
                  type="submit"
                  className={
                    !(dirty && isValid) ? 'disabled-btn' : 'submit-btn'
                  }
                >
                  Submit
                </button>
                <button type="reset" className="reset-btn">
                  Cancel
                </button>
              </Form>
              <Link to="/account/login" className="form-links">
                Back to login
              </Link>
              <Link to="/" className="form-links">
                Return to store
              </Link>
            </StyledRecoveryForm>
          )}
        </Formik>
      </StyledRecovery>

      <Footer />
    </StyledFlex>
  );
}
