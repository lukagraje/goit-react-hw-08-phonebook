import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../redux/hooks/useAuth";
import { refreshUser } from "../../redux/AuthOperations";
import { SharedLayout } from "../SharedLayout/SharedLayout";
import { Container } from "./App.styled";
import NotFound from "../NotFound/NotFound";
import { PrivateRoute } from "../route/PrivateRoute";
import { RestrictedRoute } from "../route/RestrictedRoute";

const HomePage = lazy(() => import("../../pages/HomePage"));
const PhonebookPage = lazy(() => import("../../pages/PhonebookPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));
const RegisterPage = lazy(() => import("../../pages/RegisterPage"));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Loading...</p>
  ) : (
      <Container>
    <BrowserRouter basename="/goit-react-hw-08-phonebook/">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
              <RestrictedRoute element={RegisterPage} redirectTo="/contacts" />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute element={LoginPage} redirectTo="/contacts" />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute element={PhonebookPage} redirectTo="/login" />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter></Container>
  );
}
