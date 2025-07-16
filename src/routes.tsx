import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

// Lazy pages
const HomePage = lazy(() => import("./pages/HomePage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SignUp = lazy(() => import("./pages/Auth/SignUp"));
const Login = lazy(() => import("./pages/Auth/Login"));
const MarketPage = lazy(() => import("./pages/MarketPage"));

const routes: RouteObject[] = [
  { path: "/", element: <HomePage />, index: true },
  { path: "/marketing", element: <MarketPage /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <Login /> },
  { path: "*", element: <NotFound /> }
];

export default routes;
