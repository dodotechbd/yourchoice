import React, { useEffect, useState } from "react";

const SubNav = () => {
  const [navData, setNavData] = useState("");
  const [isHover, setIsHover] = useState("");
  const fetchSubNavs = async () => {
    const navs = await (await fetch("subnavs.json")).json();
    setNavData(navs);
  };
  useEffect(() => {
    fetchSubNavs();
  }, []);
  console.log(navData);
  return (
    <div className="px-4 py-3">
      <ul className="flex items-center gap-6 text-gray-700">
        {navData && (
          <>
            {navData?.map((item, idx) => (
              <div
                onMouseEnter={() => setIsHover(idx)}
                onMouseLeave={() => setIsHover("")}
                key={idx}
              >
                <li className="pb-3">
                  <button
                    className={`border-b ${
                      isHover === idx ? "border-black" : "border-transparent"
                    }`}
                  >
                    {item?.name}
                  </button>
                </li>
                <div
                  className={`absolute ${
                    isHover === idx ? "transition duration-500" : "hidden"
                  } left-0 bg-white shadow-[15px_0_15px_0px_rgba(0,0,0,0.2)] px-4 flex items-start py-4 w-full`}
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
                </div>
              </div>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default SubNav;
