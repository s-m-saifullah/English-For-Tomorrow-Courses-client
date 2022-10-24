import { createBrowserRouter } from "react-router-dom";
import Courses from "../components/pages/Course/Courses";
import CourseDetails from "../components/pages/CourseDetails/CourseDetails";
import ErrorPage from "../components/pages/ErrorPage";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login";
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
        path: "/course/:id",
        element: <CourseDetails />,
        loader: ({ params }) =>
          fetch(
            `https://englishfortomorrow-server.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/*",
        element: <ErrorPage />,
      },
    ],
  },
]);
