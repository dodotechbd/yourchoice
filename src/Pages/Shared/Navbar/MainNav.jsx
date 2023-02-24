import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import NavSearch from "./NavSearch";
import SubNav from "./SubNav";
import UserNav from "./UserNav";

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
  const [lastScrollTop, setLastScrollTop] = useState(0);
  // the offset of the document.body
  const [bodyOffset, setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  );

  const [scrollY, setScrollY] = useState(bodyOffset.top);
  const [scrollDirection, setScrollDirection] = useState();

  const listener = (e) => {
    setBodyOffset(document.body.getBoundingClientRect());
    setScrollY(-bodyOffset.top);
    setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
    setLastScrollTop(-bodyOffset.top);
  };

  const styles = {
    active: {
      visibility: "visible",
      transition: "all 0.5s",
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.5s",
      transform: "translateY(-100%)",
    },
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });
  return (
    <div className="bg-white">
      <div>
        <div className="flex w-full justify-between items-center lg:gap-8 px-4 lg:pt-5 lg:py-0 py-2">
          <div className="lg:hidden flex justify-start gap-6 w-full items-center">
            <button>
              <RxHamburgerMenu
                onClick={() => setIsMenu(true)}
                className="text-2xl"
              />
            </button>
            <button>
              <FiSearch onClick={() => setSearch(true)} className="text-xl" />
            </button>
          </div>
          <div className="flex items-center lg:gap-8">
            <Link
              to={"/"}
              className="lg:text-3xl text-2xl uppercase font-extrabold"
            >
              YourChoice
            </Link>
            <ul className="lg:flex gap-8 font-medium text-[#2D2D2D] hidden">
              {navLink}
            </ul>
            <NavSearch search={search} closeSearch={() => setSearch(false)} />
          </div>
          <UserNav />
        </div>
        <SubNav menu={isMenu} closeMenu={() => setIsMenu(false)} />
      </div>
      <div
        style={
          scrollY >= 350 && scrollDirection === "down"
            ? styles.active
            : styles.hidden
        }
        className="bg-white flex px-4 z-50 shadow-xl items-center justify-between w-screen py-2 lg:py-0 fixed left-0 duration-500 top-0"
      >
        <div className="lg:hidden flex justify-start gap-6 w-full items-center">
          <button>
            <RxHamburgerMenu
              onClick={() => setIsMenu(true)}
              className="text-2xl"
            />
          </button>
          <button>
            <FiSearch onClick={() => setSearch(true)} className="text-xl" />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to={"/"}
            className="lg:text-2xl text-2xl uppercase font-extrabold"
          >
            YourChoice
          </Link>
          <SubNav menu={isMenu} hideTip closeMenu={() => setIsMenu(false)} />
        </div>
        <UserNav scroll />
      </div>
    </div>
  );
};

export default MainNav;
