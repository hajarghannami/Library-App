import styled from "styled-components";

export const NavbarDropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
  padding: 12px 16px;
  z-index: 1;
`;

export const NavbarDropdown = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${NavbarDropdownContent} {
    display: block;
  }
`;