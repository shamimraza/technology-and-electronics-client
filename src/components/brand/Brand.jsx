const Brand = ({ brand }) => {
  const { name, image } = brand;
  console.log(brand);

  return (
    <div className="card card-compact  h-full w-11/12 lg:w-full mx-auto bg-base-100 shadow-xl">
      <figure>
        <img className="h-96" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      </div>
    </div>
  );
};

export default Brand;
