import { useLoaderData } from "react-router-dom";
import ProductCard from "../productCard/ProductCard";

const ProductBrands = () => {
  const brands = useLoaderData();
  return (
    <div>
      <h2>product brand : {brands.length}</h2>
      <div>
        {brands.map((brand) => (
          <ProductCard key={brand._id} brand={brand}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductBrands;
