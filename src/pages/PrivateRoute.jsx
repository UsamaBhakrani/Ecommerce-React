import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Loading } from "../components";

const PrivateRoute = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    returnTo: () => "/home",
    onRedirecting: () => {
      return (
        <h2>
          <Loading />
        </h2>
      );
    },
  });
  return <Component />;
};
export default PrivateRoute;
