import { Link } from "react-router-dom";

const SingleProducts = ({ single }) => {
  const { _id, name, brand, price, description, rating, types, image } = single;
  console.log(single);
  return (
    <div className="card w-96  w-11/12 lg:w-full mx-auto mt-10 bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-96" src={image} alt="Shoes" />
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
          <Link to={`/details/${_id}`}>
            <button className="btn btn-sm">Details </button>
          </Link>
          <Link to="/product">
            <button className="btn btn-sm">Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
