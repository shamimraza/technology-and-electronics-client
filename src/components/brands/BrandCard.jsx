import { Link } from "react-router-dom";

const BrandCard = ({ user }) => {
  const { name, image } = user;
  console.log(user);
  return (
    <div>
      <Link to={`/advertisement/${name}`}>
        <div className="card h-96 w-11/12 lg:w-full mx-auto mt-10 bg-gray-200 shadow-xl">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title ">{name}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BrandCard;
