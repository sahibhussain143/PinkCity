import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isAdmin = localStorage.getItem("isAdmin");

  // 🚫 Block access if admin is not logged in
  if (!isAdmin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminProtectedRoute;
