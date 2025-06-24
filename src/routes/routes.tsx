// Dependencies
import { lazy } from "react";
import type { FunctionComponent } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import { RouteValidator } from "./route-validator";

// Pages
const Home = lazy(() => import("../pages/home-page"));
const SignIn = lazy(() => import("../pages/sign-in-page"));
const SignedUserPage = lazy(() => import("../pages/signed-page"));

export const ApplicationRoutes: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouteValidator component={Home} />} />

        <Route path="/login" element={<RouteValidator component={SignIn} />} />

        <Route
          path="/logado"
          element={<RouteValidator component={SignedUserPage} />}
        />

        <Route path="*" element={<Navigate to={{ pathname: "/" }} />} />
      </Routes>
    </BrowserRouter>
  );
};
