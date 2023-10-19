import { Outlet } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";

const Main = () => {
  return (
    <div className="w-11/12 mx-auto">
      <NavBar></NavBar>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
