import React from "react";
import NavSearch from "./NavSearch";

const MainNav = () => {
  const navLink = (
    <>
      <li className="hover:underline">
        <a href="#">SHOP</a>
      </li>
      <li className="hover:underline">
        <a href="#">INSPIRATION</a>
      </li>
      <li className="hover:underline">
        <a href="#">ABOUT</a>
      </li>
    </>
  );
  return (
    <div className="flex items-center gap-8 px-4 pt-5">
      <h1 className="text-3xl uppercase font-bold">YourChoice</h1>
      <ul className="flex gap-8 font-medium text-[#2D2D2D]">{navLink}</ul>
      <NavSearch />
    </div>
  );
};

export default MainNav;
