import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { id, name, image } = brand;
  console.log(brand);

  return (
    <div>
      <Link to={`/redirect/${id}`}>
        <div className="card card-compact  h-full w-11/12 lg:w-full mx-auto bg-base-100 shadow-xl">
          <figure>
            <img className="h-96" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Brand;
