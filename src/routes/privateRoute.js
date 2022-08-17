import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const PrivateRoute = () => {
  const auth = localStorage.getItem("jwtToken");
  if (!auth) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
};
export default PrivateRoute;



