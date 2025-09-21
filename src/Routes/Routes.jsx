import {
  createBrowserRouter,
 // RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import MenuProduct from "../pages/Menu/Menu/MenuProduct";

 export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:"/menu",
        element:<MenuProduct></MenuProduct>
      }
    ]
  },
]);