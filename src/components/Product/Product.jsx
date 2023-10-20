const Product = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const text = form.text.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const star = form.star.value;
    const photo = form.photo.value;
    const item = form.item.value;
    const brand2 = form.brand2.value;
    const newBrand = {
      text,
      brand,
      brand2,
      price,
      description,
      star,
      photo,
      item,
    };
    console.log(newBrand);

    // sent data to the server
    fetch("http://localhost:5000/brand", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBrand),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold text-center mb-10">
        Add Brand Items
      </h2>
      <form onSubmit={handleSubmit}>
        {/* form row 1*/}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                name="text"
                type="text"
                placeholder="Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                name="brand"
                type="text"
                placeholder="Brand Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row 2*/}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                name="price"
                type="text"
                placeholder="Product price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                name="description"
                type="text"
                placeholder="Short Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row 3*/}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                name="star"
                type="text"
                placeholder="Enter price rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                name="brand2"
                type="text"
                placeholder="Brand Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row 4*/}
        <div className="md:flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <label className="input-group">
              <input
                name="photo"
                type="text"
                placeholder="Enter Photo Url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Items</span>
            </label>
            <label className="input-group">
              <input
                name="item"
                type="text"
                placeholder="Items"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add Brand"
          className="bg-gray-200 btn btn-block"
        />
      </form>
    </div>
  );
};

export default Product;
