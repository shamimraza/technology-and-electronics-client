import { useLoaderData } from "react-router-dom";
import DellProduct from "../dellproduct/DellProduct";

const HotDell = () => {
  const dell = useLoaderData();
  return (
    <div>
      <h2 className="mt-8 text-3xl font-extrabold text-amber-500">
        Hot Dell product
      </h2>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-4">
        {dell.map((hot) => (
          <DellProduct key={hot._id} hot={hot}></DellProduct>
        ))}
      </div>
    </div>
  );
};

export default HotDell;
