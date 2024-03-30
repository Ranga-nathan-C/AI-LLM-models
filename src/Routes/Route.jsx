import { createBrowserRouter } from "react-router-dom";

import Home from "../Home";
import Login from "../Login";
import Signup from "../Signup";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/Signup",
        element: <Signup />,
    },
]);
export default router;