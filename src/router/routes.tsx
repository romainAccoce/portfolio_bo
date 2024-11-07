import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Projects from "../pages/Projects";
import Informations from "../pages/Informations";
import Users from "../pages/Users";
import { customRouteObject } from "../types/route";
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

export const routes: customRouteObject[] = [
  {
    path: "projects",
    element: <Projects />,
    icon: <CodeOutlinedIcon fontSize="large" />
  },
  {
    path: "informations",
    element: <Informations />,
    icon: <InfoOutlinedIcon fontSize="large" />
  },
  {
    path: "users",
    element: <Users />,
    icon: <PeopleAltOutlinedIcon fontSize="large" />
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes,
  },
]);
