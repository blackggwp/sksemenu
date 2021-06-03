import React from "react";
import { Route, Redirect } from "react-router-dom";

interface PrivateRouteProps {
  path: string;
  component(): any;
  isAuthenticated?: boolean;
}
const PrivateRoute = ({
  component,
  isAuthenticated,
  path,
  ...rest
}: PrivateRouteProps) => {
  const isLogin = localStorage.getItem("isLogin");
  const routeComponent = (props: any) =>
    isLogin ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/auth", state: path }} />
    );
  return <Route {...rest} render={routeComponent} />;
};

export default PrivateRoute;
