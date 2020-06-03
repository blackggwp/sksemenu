import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { usersSelector } from "../slices/users";

const PrivateRoute = ({ render: Component, location: Location, ...rest }) => {
  // const isLogin = localStorage.getItem('isLogin')
  return (
    <Route
      {...rest}
      render={(props) =>
        Location.pic !== undefined ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
