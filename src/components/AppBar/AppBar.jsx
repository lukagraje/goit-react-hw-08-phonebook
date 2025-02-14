import { useAuth } from "../../redux/hooks/useAuth";
import UserMenu from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";
import { Navigation } from "../Navigation/Navigation";
import { AppBarContainer } from "./AppBar.styled";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <AppBarContainer>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBarContainer>
  );
};
