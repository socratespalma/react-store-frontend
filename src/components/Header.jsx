import React from 'react';
import { FaSearch, FaShoppingBag, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledHeader = styled.div`
  ${tw`
    bg-[#f4f4f4]
    text-2xl
    text-[#0f1525]
    font-bold
    flex
    justify-between
    items-center
  `}
  padding: 1.5rem 3rem;
`;

const StyledHeaderIcons = styled.section`
  ${tw`
    flex
    justify-between
    w-32
  `}
`;

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">Amapola Escarlata</Link>
      <StyledHeaderIcons>
        <FaSearch />
        <Link to="/account/login">
          <FaUserAlt />
        </Link>

        <FaShoppingBag />
      </StyledHeaderIcons>
    </StyledHeader>
  );
}
