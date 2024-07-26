import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AuthNavContainer = styled.div`
  display: flex;
  gap: 15px;
`;

export const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 16px;

  &.active {
    font-weight: bold;
  }

  &:hover {
    text-decoration: underline;
  }
`;