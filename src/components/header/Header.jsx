import banner from "../../assets/consumer-and-home-electronicstvfridgevacuum-cleanermicrowavewasher-HKPR1N-removebg-preview.png";
import Brands from "../brand/Brands";

const Header = () => {
  return (
    <div>
      <div className="flex justify-around items-center ">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">BEST PLACE TO BUY YOUR ALL</h2>
          <h2 className="text-3xl">ElECTRONIC</h2>
          <h2 className="text-3xl font-semibold">PRODUCTS</h2>
        </div>

        <img src={banner} alt="" />
      </div>
      <Brands></Brands>
    </div>
  );
};

export default Header;
