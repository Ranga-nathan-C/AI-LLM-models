import { createBrowserRouter } from "react-router-dom";

import Home from "../Home";
import Home2 from "../Home2";
import Login from "../Login";
import Signup from "../Signup";
import Favouite from "../Favourite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Home",
    element: <Home2 />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/Favourite",
    element: <Favouite />,
  },
]);
export default router;