import { Navigate, Outlet, useLocation } from "react-router-dom";

export const RequireAuth = () => {
  const token = localStorage.getItem("jwt");
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};
