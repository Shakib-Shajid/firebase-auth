import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home"
import Login from "../components/Login/Login"
import Signup from "../components/Signup/Signup"
import Secret from "../components/Secret/Secret"
import Privateroute from "./Privateroute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element : <Home></Home>,
      },
      {
        path: '/login',
        element : <Login></Login>,
      },
      {
        path: '/signup',
        element : <Signup></Signup>,
      },
      {
        path: '/secret',
        element : <Privateroute><Secret></Secret></Privateroute>,
      },
    ]
  },
]);

