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
        loader: () =>
          fetch(
            "https://technology-and-electronics-server-2mibcf44w-shamimraza.vercel.app/brands"
          ),
      },
      {
        path: "advertisement/:brand",
        element: <Advertisement></Advertisement>,
        loader: ({ params }) =>
          fetch(
            `https://technology-and-electronics-server-2mibcf44w-shamimraza.vercel.app/product/${params.brand}`
          ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRoutes>
            <Details></Details>
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://technology-and-electronics-server-2mibcf44w-shamimraza.vercel.app/products/${params.id}`
          ),
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
        loader: fetch(
          "https://technology-and-electronics-server-2mibcf44w-shamimraza.vercel.app/products"
        ),
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
