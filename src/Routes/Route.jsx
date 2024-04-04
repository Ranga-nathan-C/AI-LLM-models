import { createBrowserRouter } from "react-router-dom";

import Home2 from "../Home2";
import Favouite from "../Favourite";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Home2 />,
  },
  {
    path: "/Favourite",
    element: <Favouite />,
  },
]);
export default router;