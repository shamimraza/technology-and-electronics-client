import { useLoaderData } from "react-router-dom";

const Cart = () => {
  const userLoaded = useLoaderData();
  console.log(userLoaded);
  return (
    <div>
      <h2> my cart</h2>
    </div>
  );
};

export default Cart;
