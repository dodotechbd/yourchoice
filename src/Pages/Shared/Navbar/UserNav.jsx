import React from "react";
import {
  HiOutlineHeart,
  HiOutlineLanguage,
  HiOutlineShoppingCart,
  HiOutlineUserCircle
} from "react-icons/hi2";
import { Link } from "react-router-dom";

const UserNav = () => {
  return (
    <>
      <div className="hidden text-2xl lg:flex gap-5 justify-end items-center">
        <Link to={"account"} className="">
          <HiOutlineUserCircle />
        </Link>
        <button className="">
          <HiOutlineHeart />
        </button>
        <button className="">
          <HiOutlineShoppingCart />
        </button>
        <button className="">
          <HiOutlineLanguage />
        </button>
      </div>
      <div className="lg:hidden w-full flex gap-5 justify-end items-center text-2xl">
        <Link to={"account"} className="">
          <HiOutlineUserCircle />
        </Link>
        <button className="">
          <HiOutlineShoppingCart />
        </button>
      </div>
    </>
  );
};

export default UserNav;
