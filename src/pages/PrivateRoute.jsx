import { withAuthenticationRequired } from "@auth0/auth0-react";


const PrivateRoute = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    returnTo: () => "/checkout",
    onRedirecting: () => {
      return <h2>Loading...</h2>;
    },
  });
  return <Component />;
};
export default PrivateRoute;
