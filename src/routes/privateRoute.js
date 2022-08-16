import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const PrivateRoute = () => {
  const auth = localStorage.getItem("jwtToken");
  if (!auth) {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
};
export default PrivateRoute;





// import React from "react";
// import { Route, Redirect } from "react-router-dom";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if (!localStorage.getItem("jwtToken")) {
//           // not logged in so redirect to login page with the return url
//           return (
//             <Redirect
//               to={{ pathname: "/login", state: { from: props.location } }}
//             />
//           );
//         }
//         // logged in so return component
//         return <Component {...props} />;
//       }}
//     />
//   );
// };

// export default PrivateRoute;
