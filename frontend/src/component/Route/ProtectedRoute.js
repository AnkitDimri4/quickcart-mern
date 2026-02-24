// import { Navigate, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";

// const ProtectedRoute = ({ children, isAdmin }) => {
//   const { isAuthenticated, user } = useSelector((state) => state.user);
//   const location = useLocation();

//   if (!isAuthenticated) {
//     // Redirect to login and remember where we came from
//     return <Navigate to="/login" state={{ from: location.pathname }} replace />;
//   }

//   if (isAdmin && user.role !== "admin") {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;

import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={`/login?redirect=${location.pathname}`} replace />;
  }

  return children;
};

export default ProtectedRoute;
