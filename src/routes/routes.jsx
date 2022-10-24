import { createBrowserRouter } from "react-router-dom";
import Courses from "../components/pages/Course/Courses";
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
        path: "/courses",
        element: <Courses />,
        loader: () =>
          fetch("https://englishfortomorrow-server.vercel.app/courses/"),
      },
      {
        path: "/*",
        element: <ErrorPage />,
      },
    ],
  },
]);
