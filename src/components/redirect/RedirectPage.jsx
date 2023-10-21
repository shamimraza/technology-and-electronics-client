import { Link, useLoaderData, useParams } from "react-router-dom";

const RedirectPage = () => {
  const redirects = useLoaderData();
  console.log(redirects);
  const { id } = useParams();
  const idPint = parseInt(id);
  const direct = redirects.find((detail) => detail.id === idPint);
  const {
    image,
    bb,
    src,
    img,
    name,
    pho,
    price,
    rating,
    short_description,
    brand_name,
    short_description1,
    short_description2,
    short_description3,
  } = direct;
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-[500px]">
          <img
            src="https://i.ibb.co/0DHCdDN/camera-275007-1280.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-[500px]">
          <img
            src="https://i.ibb.co/RNZZnfR/pexels-photo-306763.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-[500px]">
          <img
            src="https://i.ibb.co/m6F74Yv/android-1814556-1280.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-[500px]">
          <img
            src="https://i.ibb.co/X38kzvX/monitor-1307227-640.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <h2 className="text-center text-3xl font-semibold font-serif my-20">
        Products
      </h2>
      <div className="mt-20 flex gap-3 lg:flex-row-reverse md:flex-col-reverse">
        {/* 1 */}
        <div className="card  card-compact bg-base-100 shadow-xl flex-1">
          <figure>
            <img className="w-96 h-80" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Brand : {name}</h2>
            <h2>Price: {price}</h2>
            <h2>Rating : {rating}</h2>
            <h2>Name: {brand_name}</h2>
            <p>{short_description}</p>
            <div className="card-actions justify-end">
              <Link>
                <button className="btn btn-sm">Details</button>
              </Link>
              <button className="btn btn-sm">Update</button>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="card card-compact bg-base-100 shadow-xl flex-1">
          <figure>
            <img className="w-96 h-80" src={img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Brand : {name}</h2>
            <h2>Price: {price}</h2>
            <h2>Rating : {rating}</h2>
            <h2>Name: {brand_name}</h2> <p>{short_description1}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm">Details</button>
              <button className="btn btn-sm">Update</button>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="card card-compact bg-base-100 shadow-xl flex-1">
          <figure>
            <img className="w-96 h-80" src={src} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Brand : {name}</h2>
            <h2>Price: {price}</h2>
            <h2>Rating : {rating}</h2>
            <h2>Name: {brand_name}</h2> <p>{short_description2}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm">Details</button>
              <button className="btn btn-sm">Update</button>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="card card-compact bg-base-100 shadow-xl flex-1">
          <figure>
            <img className="w-96 h-80" src={bb} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Brand : {name}</h2>
            <h2>Price: {price}</h2>
            <h2>Rating : {rating}</h2>
            <h2>Name: {brand_name}</h2> <p>{short_description3}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm">Details</button>
              <button className="btn btn-sm">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedirectPage;
