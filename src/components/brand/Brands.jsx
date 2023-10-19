import React, { useEffect, useState } from "react";
import Brand from "./Brand";
import { Link } from "react-router-dom";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div>
      <h2 className="text-center text-4xl mt-16 font-serif">brand Item</h2>
      <Link to="productbrand">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-9">
          {brands.map((brand) => (
            <Brand key={brand.id} brand={brand}></Brand>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default Brands;
