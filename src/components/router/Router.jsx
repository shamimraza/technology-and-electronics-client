import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../home/Home";
import Product from "../Product/Product";
import Cart from "../cart/Cart";
import Login from "../login/Login";
import Register from "../register/Register";
import Advertisement from "../Advaritisement/Advertisement";
import Error from "../error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/brands"),
      },
      {
        path: "advertisement/:brand",
        element: <Advertisement></Advertisement>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.brand}`),
      },
      {
        path: "/product",
        element: <Product></Product>,
      },

      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
