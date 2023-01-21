import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const NavSearch = () => {
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
  );
};

export default NavSearch;
