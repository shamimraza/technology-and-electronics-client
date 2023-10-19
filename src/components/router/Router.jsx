import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../home/Home";
import Product from "../Product/Product";
import Cart from "../cart/Cart";
import Login from "../login/Login";
import Register from "../register/Register";
import ProductBrands from "../productBrand/ProductBrands";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
      {
        path: "/productbrand",
        element: <ProductBrands></ProductBrands>,
      },
    ],
  },
]);
export default router;
