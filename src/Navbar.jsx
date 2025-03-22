import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import Logo from "./Utils/Logo";

const Navbar = () => {
  const items = useSelector((state) => state.cart.items);

  return (
    <div className="nav shadow">
      <div className="navbar flex items-center justify-between md:w-9/10 m-auto p-3">
      <Logo/>
        <div className="w-[600px] sm:w-1/2">
          <ul className="flex cursor-pointer justify-evenly">
            <Link to={"/"}><li><em>HOME</em></li></Link>
            <Link to={"/about"}><li><em>ABOUT</em></li></Link>
            <Link to={"/contact"}><li><em>CONTACT</em></li></Link>
            <Link to={"/cart"}><li><em>CART <sup>{items.length > 0 ? `(${items.length})` : ""}</sup></em></li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
