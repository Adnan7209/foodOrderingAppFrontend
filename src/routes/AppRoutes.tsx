import ProtectedRoute from "@/auth/ProtectedRoute";
import Layout1 from "@/layouts/Layout1";
import AuthCallbackPage from "@/pages/AuthCallbackPage";
import HomePage from "@/pages/HomePage";
import ManageRestaurantPage from "@/pages/ManageRestaurantPage";
import SearchPage from "@/pages/SearchPage";
import UserProfilePage from "@/pages/UserProfilePage";
import { Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout1 showHero>
            <HomePage />
          </Layout1>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route
        path="/search/:city"
        element={
          <Layout1 showHero={false}>
            <SearchPage />
          </Layout1>
        }
      />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/user-profile"
          element={
            <Layout1>
              <UserProfilePage />
            </Layout1>
          }
        />
        <Route
          path="/manage-restaurant"
          element={
            <Layout1>
              <ManageRestaurantPage />
            </Layout1>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
