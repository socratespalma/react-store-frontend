import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUsPage from './containers/AboutUsPage';
import ContactUsPage from './containers/ContactUsPage';
import ForgotPasswordPage from './containers/ForgotPasswordPage';
import HelpPage from './containers/HelpPage';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import NotFoundPage from './containers/NotFoundPage';
import PrivacyPolicyPage from './containers/PrivacyPolicyPage';
import RegisterPage from './containers/RegisterPage';
import ReturnPolicyPage from './containers/ReturnPolicyPage';
import ShippingPolicyPage from './containers/ShippingPolicyPage';
import TermsOfServicePage from './containers/TermsOfServicePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="account">
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
        </Route>
        <Route path="pages">
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="help" element={<HelpPage />} />
        </Route>
        <Route path="policies">
          <Route path="terms-of-service" element={<TermsOfServicePage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="return-policy" element={<ReturnPolicyPage />} />
          <Route path="shipping-policy" element={<ShippingPolicyPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
