import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/AuthOperations";
import { FormContainer, Label, Input, Button, ErrorMessage } from "../Contacts/RegisterForm/RegisterAndLoginFormStyles.styled";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const { email, password } = form.elements;

    try {
      const resultAction = await dispatch(
        login({
          email: email.value,
          password: password.value,
        }),
      );
      unwrapResult(resultAction);
      form.reset();
      setError("");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Button type="submit">Log in</Button>
    </FormContainer>
  );
};
