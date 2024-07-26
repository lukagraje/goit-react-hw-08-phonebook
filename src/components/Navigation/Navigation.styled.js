import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.nav`
  display: flex;
  gap: 6px;

  @media (min-width: 768px) {
  gap: 20px}
`;

export const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 18px;
  }

  &.active {
    font-weight: bold;
  }

  &:hover {
    text-decoration: underline;
  }
`;