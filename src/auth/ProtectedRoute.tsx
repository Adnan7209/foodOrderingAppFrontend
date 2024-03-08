import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <span className=" text-6xl flex justify-center items-center min-h-screen animate-pulse">
        Loading... 
      </span>
    );
  }

  if (isAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to="/" replace />;

//   return isAuthenticated ? (<Outlet/>):(<Navigate to="/" replace />);
};

export default ProtectedRoute;
