import React from "react";
import {
  HiOutlineHeart,
  HiOutlineLanguage,
  HiOutlineShoppingCart,
  HiOutlineUserCircle
} from "react-icons/hi2";

const UserNav = () => {
  return (
    <>
      <div className="hidden w-full text-2xl lg:flex gap-5 justify-end items-center">
        <button className="">
          <HiOutlineUserCircle />
        </button>
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
        <button className="">
          <HiOutlineUserCircle />
        </button>
        <button className="">
          <HiOutlineShoppingCart />
        </button>
      </div>
    </>
  );
};

export default UserNav;
