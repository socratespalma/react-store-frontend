/* eslint-disable import/no-unresolved */
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import { StyledFlex } from '@styles/Flex.styled';
import { StyledText } from '@styles/Text.styled';
import React from 'react';
import { StyledBottom, StyledTop } from './ShippingPolicy.styled';

export default function ShippingPolicyPage() {
  return (
    <StyledFlex>
      <Header />
      <StyledText>
        <StyledTop>
          <h1>Shipping policy</h1>
          <h2>ITEM AVAILABILITY</h2>
          <p>
            All items available for sale on the amapolaescarlata.com website are
            expected to be in stock and available for shipment. Orders begin the
            shipping process as soon as your online purchase is complete. Items
            are shipped once they are located in stock, your payment is
            approved, and the receiving address is verified. Currently, we do
            not offer advanced sale or backorder options.
          </p>
        </StyledTop>
        <StyledBottom>
          <h2>Shipping Methods and Costs</h2>
          <p>
            Most purchases shipped from our warehouses will arrive within 5-7
            business days. If there is a delay, we will notify you by email.
            Some items sent directly from our suppliers may take longer, and
            items ordered together may not arrive in the same box.
          </p>
          <p>
            Shipping and handling charges are based on your chosen method of
            shipment and are non-refundable, even in the event of a return.
            Please see the chart below for shipping costs and estimated delivery
            times. Please note that processing times can be 1 to 2 business
            days. Orders between $0 - $74.99 have standard shipping of $6.99,
            whereas orders from $75+ have free shipping.
          </p>
          <p>
            Standard orders placed before noon EST Monday - Friday will be
            shipped the same day. Delivery will be in 5-7 days business days.
            Standard is 5-7 business days
          </p>
        </StyledBottom>
      </StyledText>

      <Footer />
    </StyledFlex>
  );
}
