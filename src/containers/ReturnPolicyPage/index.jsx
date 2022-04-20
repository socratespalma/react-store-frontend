/* eslint-disable import/no-unresolved */
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import { StyledFlex } from '@styles/Flex.styled';
import { StyledText } from '@styles/Text.styled';
import React from 'react';
import { StyledBottom, StyledTop } from './ReturnPolicy.styled';

export default function ReturnPolicyPage() {
  return (
    <StyledFlex>
      <Header />
      <StyledText>
        <StyledTop>
          <h1>Return policy</h1>
          <p>
            IMPORTANT: With limited exceptions, returns are refunded via store
            credit redeemable on dressbarn.com. Dressbarn does not issue store
            credit for the original shipping charges.
          </p>
          <p>
            With limited exceptions, we do not provide pre-paid return labels;
            you are responsible for covering shipping costs to return.
          </p>
        </StyledTop>
        <StyledBottom>
          <h2>Online Returns Policy</h2>
          <p>
            Please be sure to send us your item(s) back in full accordance with
            our Return Policy:
          </p>

          <ul>
            <li>
              Items must be sent back within 30 days of the delivery date.
            </li>
            <li>
              Items must be unworn, unwashed, and have original tags attached.
            </li>
            <li>
              After contacting our support team at support@dressbarn.com, an
              agent will create an unpaid shipping label and will send it to you
              to print and attach to the package.
            </li>
            <li>
              Upon receiving the return and passing inspection, support agent
              creates a store credit for the customer to use for purchasing an
              exchange, etc
            </li>
            <li>
              We are not liable for any return packages that may become lost or
              stolen in-transit. Please keep your proof of postage and/or return
              tracking number when shipping back your returns.
            </li>
            <li>
              Returns are processed within 5-7 business days after your item(s)
              are delivered to us.
            </li>
          </ul>
        </StyledBottom>
      </StyledText>

      <Footer />
    </StyledFlex>
  );
}
