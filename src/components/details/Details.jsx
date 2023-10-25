import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Details = () => {
  const { user } = useContext(AuthContext);
  const detailsData = useLoaderData();
  console.log(detailsData);
  const { name, price, description, types, image } = detailsData;
  const userEmail = user.email;
  const handleAddTOCard = () => {
    const addToCard = {
      name,
      price,
      description,
      types,
      image,
      userEmail,
    };
    console.log(addToCard);

    fetch(
      "https://technology-and-electronics-server-2mibcf44w-shamimraza.vercel.app/adToCardProduct",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addToCard),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("yes paici");
        }
      });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="h-60" src={image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name : {name}</h2>
        <p>Price : {price}</p>
        <p>Brand Type : {types}</p>
        <p>Description : {description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleAddTOCard}
            className="btn btn-outline btn-success"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
