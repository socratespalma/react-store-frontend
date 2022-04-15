/* eslint-disable import/no-unresolved */
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import { StyledFlex } from '@styles/Flex.styled';
import { Form, Formik } from 'formik';
import Notiflix from 'notiflix';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Textfield from '../../components/auth/Textfield';
import { StyledForm, StyledLogin } from './Login.styled';
import loginSchema from './login.validation';

export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <StyledFlex>
      <Header />
      <StyledLogin>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={() => {
            navigate('/');
            Notiflix.Notify.success('Logged in successfully');
          }}
        >
          {({ handleSubmit, handleChange, handleBlur, values }) => (
            <StyledForm>
              <h1>Login</h1>
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
                <button type="submit">Sign in</button>
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
