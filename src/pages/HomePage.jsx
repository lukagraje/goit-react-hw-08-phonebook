import { useAuth } from "../redux/hooks/useAuth";
import { Helmet } from "react-helmet-async";
import {
  Title,
  WelcomeParagraph,
  MagicButton,
  ButtonContainer,
} from "../components/Contacts/App.styled";

export default function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Title>Phonebook</Title>
      {!isLoggedIn && (
        <WelcomeParagraph>
          In order to use your phonebook please create account or log in.
        </WelcomeParagraph>
      )}
      {isLoggedIn && (
        <WelcomeParagraph>
          {" "}
          Welcome to your secret phonebook...
        </WelcomeParagraph>
      )}
      {isLoggedIn && (
        <ButtonContainer>
          <MagicButton to="/contacts">Contacts</MagicButton>{" "}
        </ButtonContainer>
      )}
    </div>
  );
}
