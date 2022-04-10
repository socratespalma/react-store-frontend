/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import React from 'react';
import { BiWorld } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { StyledCard } from './Card.styled';

export default function Card({ title, text }) {
  const checkIcon = () => {
    if (title === 'Quality and Durability') {
      return <FaStar className="icon-feature" />;
    }
    if (title === '24/7 Customer Support') {
      return <RiCustomerService2Fill className="icon-feature" />;
    }
    return <BiWorld className="icon-feature" />;
  };

  return (
    <StyledCard>
      {checkIcon()}
      <h3>{title}</h3>
      <p>{text} </p>
    </StyledCard>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

// Card.defaultProps = {
//   title: 'lorem',
//   text: 'loremIpsum'
// };
