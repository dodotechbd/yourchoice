import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { HiOutlineLogout } from "react-icons/hi";
import {
  HiOutlineHeart,
  HiOutlineLanguage,
  HiOutlineShoppingCart,
  HiOutlineUserCircle
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const UserNav = () => {
  const [user] = useAuthState(auth);

  const logOut = () => {
    signOut(auth);
  };
  return (
    <>
      <div className="hidden text-2xl lg:flex gap-5 justify-end items-center">
        <Link to={user ? "profile" : "account"} className="">
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
        {user && (
          <button type="button" onClick={() => logOut()}>
            <HiOutlineLogout />
          </button>
        )}
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
