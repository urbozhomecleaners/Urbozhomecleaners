import { createBrowserRouter } from "react-router";
import { Home } from "./components/Home";
import { Subsidiaries } from "./components/Subsidiaries";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/subsidiaries",
    Component: Subsidiaries,
  },
]);
