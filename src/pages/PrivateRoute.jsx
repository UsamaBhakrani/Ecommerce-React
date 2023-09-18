import { Route, Navigate, redirect } from "react-router-dom";
import { useUserContext } from "../context/user_context";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import CheckoutPage from "./CheckOutPage";

const PrivateRoute = ({ component }) => {
  const { myUser } = useUserContext();
  const Component = withAuthenticationRequired(component, {
    returnTo: () => {
      {
        myUser ? <CheckoutPage /> : <Navigate to="/" />;
      }
    },
  });
  return <Component />;
};
export default PrivateRoute;
