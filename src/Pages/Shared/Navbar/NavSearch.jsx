import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const NavSearch = ({ search, closeSearch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const searches = [
    "dumpus",
    "sample",
    "collections",
    "furniture",
    "bed",
    "showcase",
    "trending collections",
    "sofa",
    "cloths",
  ];
  return (
    <div>
      <div
        onClick={() => {
          if (search) {
            closeSearch();
          }
        }}
        className={`${
          !search && "hidden"
        } fixed top-0 lg:hidden left-0 bg-black/50 w-full h-full`}
      />
      <div
        className={`fixed z-10 top-0 left-0 lg:hidden duration-700 text-gray-800 w-11/12 h-full bg-white ${
          search ? "left-0" : "md:left-[-1000px] left-[-500px]"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="uppercase text-xl font-bold">Search</h1>
          <button onClick={closeSearch}>
            <IoClose className="text-xl" />
          </button>
        </div>
        <div className="m-4 flex items-center bg-gray-100 rounded py-3">
          <FiSearch size={24} className="mx-3" />
          <input
            type="text"
            className="bg-gray-100 focus:outline-none text-gray-400 w-80"
            placeholder="Search Products..."
          />
        </div>
        <div>
          <div className="mx-4">
            <h1 className="font-bold uppercase border-b pb-2">TRENDING NOW</h1>
          </div>
          <div className="flex flex-wrap mx-4">
            {searches?.map((item, idx) => (
              <button
                type="button"
                key={idx}
                className="bg-gray-100 hover:bg-gray-300 mx-2 mt-3 px-2 py-1 rounded-md flex items-center gap-1 text-gray-500 hover:text-gray-700"
              >
                <FiSearch /> {item}
              </button>
            ))}
          </div>
          <div className="mx-4">
            <h1 className="font-bold uppercase border-b pt-4 pb-2">
              POPULAR Products
            </h1>
            <div className="text-center py-8">no products here...</div>
          </div>
        </div>
      </div>
      <div className="lg:block hidden">
        <div
          onClick={() => setIsModalOpen(false)}
          className={`fixed z-10 ${
            !isModalOpen && "hidden"
          } top-0 left-0 w-full h-full`}
        />
        <div className="relative z-10 flex items-center bg-gray-100 rounded py-3">
          <FiSearch size={24} className="mx-3" />
          <input
            type="text"
            onFocus={() => setIsModalOpen(true)}
            onClick={() => setIsModalOpen(true)}
            className="bg-gray-100 focus:outline-none text-gray-400 w-80"
            placeholder="Search entire store here..."
          />
          {/* searchmodal */}
          <div
            className={`absolute ${
              !isModalOpen && "hidden"
            } bg-white border rounded-md w-[500px] top-16`}
          >
            <div className="flex items-center justify-between mx-4 pt-4 pb-2 border-b">
              <h1 className="font-bold uppercase">TRENDING NOW</h1>
              <button onClick={() => setIsModalOpen(false)}>
                <IoClose size={20} />
              </button>
            </div>
            <div className="flex flex-wrap mx-4">
              {searches?.map((item, idx) => (
                <button
                  type="button"
                  key={idx}
                  className="bg-gray-100 hover:bg-gray-300 mx-2 mt-3 px-2 py-1 rounded-md flex items-center gap-1 text-gray-500 hover:text-gray-700"
                >
                  <FiSearch /> {item}
                </button>
              ))}
            </div>
            <div className="mx-4">
              <h1 className="font-bold uppercase border-b pt-4 pb-2">
                POPULAR Products
              </h1>
              <div className="text-center py-8">no products here...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavSearch;
