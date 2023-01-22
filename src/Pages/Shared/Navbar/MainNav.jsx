import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import NavSearch from "./NavSearch";
import SubNav from "./SubNav";

const MainNav = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [search, setSearch] = useState(false);
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
    <div>
      <div className="flex items-center gap-8 px-4 lg:pt-5 lg:py-0 py-2">
        <RxHamburgerMenu
          onClick={() => setIsMenu(true)}
          className="text-2xl lg:hidden"
        />
        <FiSearch
          onClick={() => setSearch(true)}
          className="text-xl lg:hidden"
        />
        <h1 className="lg:text-3xl text-2xl uppercase font-bold">YourChoice</h1>
        <ul className="lg:flex gap-8 font-medium text-[#2D2D2D] hidden">
          {navLink}
        </ul>
        <NavSearch search={search} closeSearch={() => setSearch(false)} />
      </div>
      <SubNav menu={isMenu} closeMenu={() => setIsMenu(false)} />
    </div>
  );
};

export default MainNav;