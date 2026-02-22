// src/components/Navbar.jsx

import { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  padding: 18px 40px;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #2c3e50;
  cursor: pointer;
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    right: 0;
    background: white;
    flex-direction: column;
    width: 220px;
    padding: 20px;
    gap: 20px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    display: ${({ open }) => (open ? "flex" : "none")};
  }
`;

const MenuItem = styled.li`
  font-size: 15px;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #2c3e50;
  }
`;

const CTAButton = styled.button`
  padding: 8px 16px;
  background: #2c3e50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #34495e;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 24px;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <Logo>DreamHomes</Logo>

        <Hamburger onClick={() => setOpen(!open)}>
          ☰
        </Hamburger>

        <Menu open={open}>
          <MenuItem>Home</MenuItem>
          <MenuItem>Listings</MenuItem>
          <MenuItem>Contact</MenuItem>
          <CTAButton>Free Consultation</CTAButton>
        </Menu>
      </NavContainer>
    </Nav>
  );
}