import Swal from "sweetalert2";

const Product = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const types = form.types.value;
    const image = form.image.value;

    const newBrand = {
      name,
      brand,
      price,
      description,
      rating,
      types,
      image,
    };
    console.log(newBrand);

    // sent data to the server
    fetch("http://localhost:5000/brands", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBrand),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "brand added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
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
                name="name"
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
                name="rating"
                type="text"
                placeholder="Enter price rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Brand Type</span>
            </label>
            <label className="input-group">
              <input
                name="types"
                type="text"
                placeholder="Brand Type"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row 4*/}
        <div className=" mb-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Image Url</span>
            </label>
            <label className="input-group">
              <input
                name="image"
                type="text"
                placeholder="Enter Photo Url"
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
