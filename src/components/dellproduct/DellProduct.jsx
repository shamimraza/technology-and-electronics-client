const DellProduct = ({ hot }) => {
  const { _id, name, brand, price, description, rating, types, image } = hot;
  console.log(hot);
  return (
    <div className="card  w-11/12 lg:w-full mx-auto mt-10 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>{price}</p>
        <p>{types}</p>
      </div>
      <figure>
        <img className="h-80" src={image} alt="Shoes" />
      </figure>
    </div>
  );
};

export default DellProduct;
