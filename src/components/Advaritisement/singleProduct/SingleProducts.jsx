const SingleProducts = ({ single }) => {
  const { name, brand, price, description, rating, types, image } = single;
  console.log(single);
  return (
    <div className="card w-96  w-11/12 lg:w-full mx-auto mt-10 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Name : {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Price : {price}</p>
        <p>Brand Type: {types}</p>
        <p>Rating : {rating}</p>
        <p>Description : {description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
