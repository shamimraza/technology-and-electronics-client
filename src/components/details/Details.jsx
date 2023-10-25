import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const detailsData = useLoaderData();
  console.log(detailsData);

  const { name, price, description, types, image } = detailsData;

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="h-60" src={image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name : {name}</h2>
        <p>Price : {price}</p>
        <p>Brand Type : {types}</p>
        <p>Description : {description}</p>
        <div className="card-actions justify-end">
          <Link to="/cart">
            <button className="btn btn-outline btn-success">Add to Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
