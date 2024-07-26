import { Helmet } from "react-helmet-async";
import { RegisterForm } from "../components/Contacts/RegisterForm/RegisterForm";

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
