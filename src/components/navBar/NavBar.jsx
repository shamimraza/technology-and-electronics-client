import { Link, NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import navImage from "../../assets/user.png";
import navImg from "../../assets/download-removebg-preview.png";

const NavBar = () => {
  const pages = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/product"> Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/cart">My Cart</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {pages}
          </ul>
        </div>
        <div className="flex text-center justify-center items-center font-bold">
          <img className="w-28 h-20" src={navImg} alt="" />
          <p className="">Electronics</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{pages}</ul>
      </div>

      <div className="navbar-end">
        <div className="w-10 rounded-full mr-4">
          <img src={navImage} alt="" />
        </div>
        <Link className="hidden lg:block" to="/login">
          <button className="btn">Login</button>
        </Link>
      </div>
      <div className="lg:ml-6">
        <button className="btn btn-outline btn-info">
          <FcGoogle className="text-3xl"></FcGoogle>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
