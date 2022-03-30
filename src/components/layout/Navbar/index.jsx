import React, { useEffect, useRef, useState } from 'react';
import { FiMenu, FiSearch, FiShoppingBag, FiX } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { StyledNavbar } from './Navbar.styled';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState(window.innerWidth);
  const navRef = useRef(null);
  const showNavRef = useRef(null);

  const checkSize = () => setSize(window.innerWidth);

  const handleClick = () =>
    size < 1024 ? setIsOpen((prevState) => !prevState) : setIsOpen(true);

  useEffect(() => {
    window.addEventListener('resize', checkSize);

    if (size < 1024) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }

    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, [size]);

  useEffect(() => {
    if ((isOpen && size < 1024) || size >= 1024) {
      // navRef
      // showNavRef
    } else {
      // navRef
      // showNavRef
    }
  }, [isOpen]);

  return (
    <>
      <StyledNavbar ref={navRef}>
        <ul ref={showNavRef}>
          <NavLink className="navlink" to="/" onClick={handleClick}>
            Dresses
          </NavLink>
          <NavLink className="navlink" to="/" onClick={handleClick}>
            Clothing
          </NavLink>
          <NavLink className="navlink" to="/" onClick={handleClick}>
            Accesories
          </NavLink>
          <NavLink className="navlink" to="/" onClick={handleClick}>
            Collections
          </NavLink>
          <NavLink
            className="navlink"
            to="/account/login"
            onClick={handleClick}
          >
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

      <button
        type="button"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
    </>
  );
}
