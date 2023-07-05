import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Home />,
  },
  {
    path: "/single",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Home />,
  },
  {
    path: "/user",
    element: "",
    children: [
      {
        path: "/user/profile",
        element: <Home />,
      },
      {
        path: "/user/analytic",
        element: <Home />,
      },
      {
        path: "/user/singleAnalytic",
        element: <Home />,
      },
      {
        path: "/user/myvidoes",
        element: <Home />,
      },
      {
        path: "/user/promotion",
        element: <Home />,
      },
      {
        path: "/user/settings",
        element: <Home />,
      },
    ],
  },
  {
    path: "/admin",
    element: "",
    children: [
      {
        path: "/admin",
        element: "",
      },
    ],
  },
]);

export default router;
