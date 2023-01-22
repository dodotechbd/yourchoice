import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { GoTriangleDown, GoTriangleLeft } from "react-icons/go";
import { HiArrowLongLeft } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { TfiAngleRight } from "react-icons/tfi";

const SubNav = ({ menu, closeMenu }) => {
  const [navData, setNavData] = useState("");
  const [menuData, setMenuData] = useState("");
  const [subMenuData, setSubMenuData] = useState("");
  const [isHover, setIsHover] = useState("");
  const fetchSubNavs = async () => {
    const navs = await (await fetch("subnavs.json")).json();
    setNavData(navs);
  };
  useEffect(() => {
    fetchSubNavs();
  }, []);
  return (
    <div>
      <div
        onClick={() => {
          if (subMenuData) {
            setSubMenuData("");
          } else if (menuData) {
            setMenuData("");
          } else {
            closeMenu();
          }
        }}
        className={`${
          !menu && "hidden"
        } fixed top-0 lg:hidden left-0 bg-black/50 w-full h-full`}
      />
      <div
        className={`fixed z-10 overflow-auto lg:hidden bg-white duration-700 text-gray-800 w-11/12 h-full top-0 ${
          menu ? "left-0" : "left-[-500px]"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="uppercase text-xl font-bold">Menu</h1>
          <button onClick={closeMenu}>
            <IoClose className="text-xl" />
          </button>
        </div>
        <div>
          {navData && (
            <ul>
              {navData?.map((items, idx) => (
                <li key={idx}>
                  <div>
                    <button
                      onClick={() => setMenuData(idx + 1)}
                      className="py-3 flex justify-between items-center border-b w-full text-start px-4"
                    >
                      <p className="relative">
                        {items?.name}
                        {items?.tip && (
                          <div className="absolute text-white text-sm capitalize top-0 -right-16 text-right w-full h-full">
                            <button
                              style={{
                                background: items?.tip?.color,
                              }}
                              className="rounded-sm px-2 relative"
                            >
                              {items?.tip?.title}
                              <GoTriangleLeft
                                style={{
                                  color: items?.tip?.color,
                                }}
                                className=" absolute bottom-1 -left-2"
                              />
                            </button>
                          </div>
                        )}
                      </p>
                      <TfiAngleRight />
                    </button>
                    <div
                      className={`absolute overflow-auto top-0 bg-white z-10 w-full duration-500 h-full ${
                        menuData === idx + 1 ? "left-0" : "left-[-500px]"
                      }`}
                    >
                      <div className="flex items-center py-3 bg-gray-200">
                        <button
                          onClick={() => setMenuData(false)}
                          className="left-2 absolute"
                        >
                          <HiArrowLongLeft size={35} />
                        </button>
                        <h1 className="text-center w-full">{items?.name}</h1>
                      </div>
                      <ul className="">
                        <li>
                          <button className="w-full text-start py-3 px-4 border-b">
                            {items?.name}
                          </button>
                        </li>
                        {items?.catagory?.map((item, idx) => (
                          <li>
                            <button
                              onClick={() => setSubMenuData(idx + 1)}
                              className="w-full flex justify-between items-center text-start py-3 px-4 border-b"
                            >
                              {item?.name}
                              <TfiAngleRight />
                            </button>
                            <div
                              className={`absolute overflow-auto top-0 bg-white z-10 w-full duration-500 h-full ${
                                subMenuData === idx + 1
                                  ? "left-0"
                                  : "left-[-500px]"
                              }`}
                            >
                              <div className="flex items-center py-3 bg-gray-200">
                                <button
                                  onClick={() => setSubMenuData(false)}
                                  className="left-2 absolute"
                                >
                                  <HiArrowLongLeft size={35} />
                                </button>
                                <h1 className="text-center w-full">
                                  {item?.name}
                                </h1>
                              </div>
                              <ul className="">
                                <li>
                                  <button className="w-full text-start py-3 px-4 border-b">
                                    {item?.name}
                                  </button>
                                </li>
                                {item?.subcatagory?.map((data, idx) => (
                                  <li>
                                    <button
                                      // onClick={() => setSubMenuData(idx + 1)}
                                      className="w-full flex justify-between items-center text-start py-3 px-4 border-b"
                                    >
                                      {data}
                                      <TfiAngleRight />
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="lg:block hidden px-4 pt-6">
        <ul className="lg:flex items-center gap-6 text-gray-700">
          {navData && (
            <>
              {navData?.map((item, idx) => (
                <div
                  onMouseEnter={() => setIsHover(idx + 1)}
                  onMouseLeave={() => setIsHover("")}
                  key={idx}
                >
                  <li className="pb-4 relative">
                    <button
                      className={`border-b relative ${
                        isHover === idx + 1
                          ? "border-black"
                          : "border-transparent"
                      }`}
                    >
                      {item?.name}
                    </button>
                    {item?.tip && (
                      <div className="absolute text-white text-sm capitalize -top-5 text-right w-full">
                        <button
                          style={{
                            background: item?.tip?.color,
                          }}
                          className="rounded-sm px-2 relative"
                        >
                          {item?.tip?.title}
                          <GoTriangleDown
                            style={{
                              color: item?.tip?.color,
                            }}
                            className="w-full absolute -bottom-2 left-0"
                          />
                        </button>
                      </div>
                    )}
                  </li>
                  <motion.div
                    initial={{ y: -10 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.001 }}
                    className={`absolute ${
                      isHover === idx + 1 ? "transition duration-500" : "hidden"
                    } left-0 bg-white shadow-[15px_0_15px_0px_rgba(0,0,0,0.2)] px-4 flex items-start py-5 w-full min-h-[50%]`}
                  >
                    {item?.catagory?.map((data, idx) => (
                      <div key={idx} className="w-full">
                        <h1 className="font-medium">{data?.name}</h1>
                        <ul className="flex flex-col items-start">
                          {data?.subcatagory?.map((sub, idx) => (
                            <button
                              key={idx}
                              className="mt-2 hover:underline hover:text-teal-700"
                            >
                              {sub}
                            </button>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                </div>
              ))}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SubNav;
