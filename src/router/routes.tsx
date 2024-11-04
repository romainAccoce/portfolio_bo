import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import Projects from "../pages/Projects";
import Informations from "../pages/Informations";
import Users from "../pages/Users";

const routes: RouteObject[] = [
  {
    path: "projects",
    element: <Projects />,
  },
  {
    path: "informations",
    element: <Informations />,
  },
  {
    path: "users",
    element: <Users />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes,
  },
]);
