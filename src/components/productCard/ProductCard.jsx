const ProductCard = ({ brand }) => {
  const { text, brandItem, brand2, price, description, star, photo, item } =
    brand;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src="/images/stock/photo-1635805737707-575885ab0820.jpg"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{text}</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details</button>
          <button className="btn btn-primary">Update </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
