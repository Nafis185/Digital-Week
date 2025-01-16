import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Gallery from "../Pages/Home/Gallery/Gallery";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import About from "../Pages/Home/About/About";
import Event from "../Pages/Home/Event/Event";
import Checkout from "../Pages/Checkout/Checkout";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/events",
        element: <Event></Event>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/checkout/:id",
        element: <Checkout></Checkout>,
        loader : ({params}) => fetch (`http://localhost:5000/Events/${params.id}`)
      },
      
     
    ],
  },
]);


export default router;