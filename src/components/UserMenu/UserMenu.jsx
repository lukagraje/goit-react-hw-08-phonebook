import { useDispatch } from "react-redux";
import { logOut } from "../../redux/AuthOperations";
import { useAuth } from "../../redux/hooks/useAuth";
import { UserMenuContainer, Greeting, LogoutButton } from "./UserMenu.styled";

export default function UserMenu() {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <UserMenuContainer>
      <Greeting>Hi {user.email}</Greeting>
      <LogoutButton onClick={handleLogOut}>Logout</LogoutButton>
    </UserMenuContainer>
  );
}
