import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/pages/ErrorPage";
import Home from "../components/pages/Home";
import Main from "../layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/*",
        element: <ErrorPage />,
      },
    ],
  },
]);
