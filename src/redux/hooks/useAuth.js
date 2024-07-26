import { useSelector } from "react-redux";
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectToken,
} from "../selectors/auth.selector";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    token,
  };
};
