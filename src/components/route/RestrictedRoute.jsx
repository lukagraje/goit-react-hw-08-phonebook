import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../redux/hooks/useAuth";

export const RestrictedRoute = ({ element: Component, redirectTo = "/" }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

RestrictedRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.string,
};
