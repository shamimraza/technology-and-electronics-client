import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../home/Home";
import Product from "../Product/Product";
import Cart from "../cart/Cart";
import Login from "../login/Login";
import Register from "../register/Register";
import Advertisement from "../Advaritisement/Advertisement";
import Error from "../error/Error";
import Details from "../details/Details";
import HotDell from "../hotDell/HotDell";
import PrivetRoutes from "../privet route/PrivetRoutes";

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
        path: "/details/:id",
        element: (
          <PrivetRoutes>
            <Details></Details>
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/product",
        element: (
          <PrivetRoutes>
            <Product></Product>
          </PrivetRoutes>
        ),
      },
      {
        path: "/dell",
        element: <HotDell></HotDell>,
        loader: fetch("http://localhost:5000/products"),
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
