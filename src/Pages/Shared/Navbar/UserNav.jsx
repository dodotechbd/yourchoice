import React from "react";
import {
    HiOutlineHeart,
    HiOutlineLanguage,
    HiOutlineShoppingCart,
    HiOutlineUserCircle
} from "react-icons/hi2";

const UserNav = () => {
  return (
    <div className="w-full text-2xl flex gap-5 justify-end items-center">
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
  );
};

export default UserNav;
