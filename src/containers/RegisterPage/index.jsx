/* eslint-disable react/button-has-type */
/* eslint-disable import/no-unresolved */
import Textfield from '@components/auth/Textfield';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import { StyledFlex } from '@styles/Flex.styled';
import { Form, Formik } from 'formik';
import Notiflix from 'notiflix';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { StyledRegister, StyledRegisterForm } from './Register.styled';
import registerSchema from './register.validation';

export default function RegisterPage() {
  const navigate = useNavigate();

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  return (
    <StyledFlex>
      <Header />
      <StyledRegister>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={() => {
            navigate('/');
            Notiflix.Notify.success('Account created successfully');
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            dirty,
            isValid
          }) => (
            <StyledRegisterForm>
              <h1>Create account</h1>
              <h2>
                If you don&apos;t already have an account, create a customer
                profile below and join our community.
              </h2>

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
                  name="username"
                  type="text"
                  placeholder="Username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                <Textfield
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <Textfield
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <Textfield
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                />
                <button
                  disabled={!(dirty && isValid)}
                  type="submit"
                  className={
                    !(dirty && isValid) ? 'disabled-btn' : 'submit-btn'
                  }
                >
                  Sign up
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
            </StyledRegisterForm>
          )}
        </Formik>
      </StyledRegister>

      <Footer />
    </StyledFlex>
  );
}
