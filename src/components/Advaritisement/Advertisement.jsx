import { useLoaderData } from "react-router-dom";
import SingleProducts from "./singleProduct/SingleProducts";

const Advertisement = () => {
  const products = useLoaderData();
  console.log(products);
  // const { id } = useParams();
  // const product = products.filter((product) => product.brand === id);

  // console.log(product);

  return (
    <div>
      <div className="carousel w-full h-[550px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/0FD1cZg/camera-275007-640.jpg"
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
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/WVNLMnC/apple-490485-640.jpg"
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
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/bBNgVTL/download-2137340-640.png"
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
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/4tj5TDN/woman-638384-640.jpg"
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
      <div className="grid grid-cols-1  md:grid-cols-3 gap-4">
        {products.map((single) => (
          <SingleProducts key={single._id} single={single}></SingleProducts>
        ))}
      </div>
    </div>
  );
};

export default Advertisement;
