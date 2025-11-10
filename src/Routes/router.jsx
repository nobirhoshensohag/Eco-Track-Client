import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Error404 from "../Pages/Error404";
import Loading from "../Pages/Loading";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error404/>,
    hydrateFallbackElement: <Loading/>,
    children:[
        {
            index: true,
            element: <Home/>,
        },
        {
            path: '/register',
            element: <Register/>
        },
        {
            path: '/login',
            element: <Login/>
        },

    ]
  },
]);
export default router;