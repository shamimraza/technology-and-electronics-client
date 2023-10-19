const Product = () => {
  return (
    <div className="bg-[#F4F3F0] p-24">
      <form>
        <div className="flex">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                name="brand"
                type="text"
                placeholder="Brand Name"
                className="input input-bordered"
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Product;
