import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/single",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
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
