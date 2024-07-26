import { NavLink } from "react-router-dom";
import { AuthNavContainer, StyledNavLink } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Login</StyledNavLink>
    </AuthNavContainer>
  );
};
