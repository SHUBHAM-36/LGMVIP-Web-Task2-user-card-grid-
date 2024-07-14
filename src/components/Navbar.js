import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem;
  color: white;
`;

const Brand = styled.div`
  font-size: 1.5rem;
`;

const Button = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Navbar = ({ onGetUsers }) => (
  <NavbarContainer>
    <Brand>User Grid Brand</Brand>
    <Button onClick={onGetUsers}>Get Users</Button>
  </NavbarContainer>
);

export default Navbar;
