import React from 'react';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { StyledNavbar } from './Navbar.styled';

export default function Navbar() {
  return (
    <>
      <StyledNavbar>
        <ul>
          <NavLink className="navlink" to="/">
            Dresses
          </NavLink>
          <NavLink className="navlink" to="/">
            Clothing
          </NavLink>
          <NavLink className="navlink" to="/">
            Accesories
          </NavLink>
          <NavLink className="navlink" to="/">
            Collections
          </NavLink>
          <NavLink className="navlink" to="/account/login">
            Log In
          </NavLink>
        </ul>
      </StyledNavbar>

      <button type="button">
        <FiSearch />
      </button>
      <button type="button">
        <FiShoppingBag />
      </button>

      {/* <button type="button">
        <FiMenu />
      </button> */}
    </>
  );
}
