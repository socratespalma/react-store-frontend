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
import { StyledForm, StyledLogin } from './Login.styled';
import loginSchema from './login.validation';

export default function LoginPage() {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: ''
  };

  return (
    <StyledFlex>
      <Header />
      <StyledLogin>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={() => {
            navigate('/');
            Notiflix.Notify.success('Logged in successfully');
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
            <StyledForm>
              <h1>Login</h1>
              <h2>
                If you already have an account, enter your email and password
                below.
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
                <button
                  disabled={!(dirty && isValid)}
                  type="submit"
                  className={
                    !(dirty && isValid) ? 'disabled-btn' : 'submit-btn'
                  }
                >
                  Sign in
                </button>
                <button type="reset" className="reset-btn">
                  Cancel
                </button>
              </Form>
              <Link to="/account/forgot-password" className="form-links">
                Forgot your password?
              </Link>
              <Link to="/account/register" className="form-links">
                Create a new account
              </Link>
              <Link to="/" className="form-links">
                Return to store
              </Link>
            </StyledForm>
          )}
        </Formik>
      </StyledLogin>

      <Footer />
    </StyledFlex>
  );
}
