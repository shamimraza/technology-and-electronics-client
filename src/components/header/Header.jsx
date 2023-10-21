import banner from "../../assets/consumer-and-home-electronicstvfridgevacuum-cleanermicrowavewasher-HKPR1N-removebg-preview.png";
import Brands from "../brand/Brands";

const Header = () => {
  return (
    <div>
      <div className="flex justify-around items-center ">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">
            BEST PLACE TO <span className="text-red-400">BUY</span> YOUR ALL
          </h2>
          <h2 className="text-3xl">
            ElECTR<span className="text-red-500">O</span>NIC
          </h2>
          <h2 className="text-3xl font-semibold">PRODUCTS</h2>
          <h2 className="mt-8">
            Sales Offer <span className="text-red-400"> -20 Off </span>this
            offer
          </h2>
        </div>

        <img src={banner} alt="" />
      </div>
      <Brands></Brands>
    </div>
  );
};

export default Header;
