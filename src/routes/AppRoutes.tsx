import ProtectedRoute from "@/auth/ProtectedRoute";
import ErrorBoundary from "@/components/custom/ErrorBoundary";
import LoadingState from "@/components/custom/LoadingState";
import Layout1 from "@/layouts/Layout1";
import AuthCallbackPage from "@/pages/AuthCallbackPage";
import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/HomePage"));
const SearchPage = lazy(() => import("@/pages/SearchPage"));
const DetailPage = lazy(() => import("@/pages/DetailPage"));
const UserProfilePage = lazy(() => import("@/pages/UserProfilePage"));
const ManageRestaurantPage = lazy(() => import("@/pages/ManageRestaurantPage"));
const OrderStatusPage = lazy(() => import("@/pages/OrderStatusPage"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout1 showHero>
            <ErrorBoundary>
              <Suspense fallback={<LoadingState />}>
                <HomePage />
              </Suspense>
            </ErrorBoundary>
          </Layout1>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route
        path="/search/:city"
        element={
          <Layout1 showHero={false}>
            <ErrorBoundary>
              <Suspense fallback={<LoadingState />}>
                <SearchPage />
              </Suspense>
            </ErrorBoundary>
          </Layout1>
        }
      />
      <Route
        path="/detail/:restaurantId"
        element={
          <Layout1 showHero={false}>
            <ErrorBoundary>
              <Suspense fallback={<LoadingState />}>
                <DetailPage />
              </Suspense>
            </ErrorBoundary>
          </Layout1>
        }
      />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/user-profile"
          element={
            <Layout1>
              <ErrorBoundary>
                <Suspense fallback={<LoadingState />}>
                  <UserProfilePage />
                </Suspense>
              </ErrorBoundary>
            </Layout1>
          }
        />
        <Route
          path="/manage-restaurant"
          element={
            <Layout1>
              <ErrorBoundary>
                <Suspense fallback={<LoadingState />}>
                  <ManageRestaurantPage />
                </Suspense>
              </ErrorBoundary>
            </Layout1>
          }
        />
        <Route
          path="/order-status"
          element={
            <Layout1>
              <ErrorBoundary>
                <Suspense fallback={<LoadingState />}>
                  <OrderStatusPage />
                </Suspense>
              </ErrorBoundary>
            </Layout1>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
