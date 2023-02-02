import React, { useEffect, useState } from "react";

const MainCategory = () => {
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const navs = await (await fetch("maincategories.json")).json();
    setItems(navs);
  };
  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <div className="grid lg:grid-cols-3">
      {items?.map((item, idx) => (
        <div key={idx} className="w-full h-full relative">
          <img src={item?.img} alt="" className="h-full w-full scale-100 bg-center bg-cover" />
          <div className="absolute left-0 top-0 mt-12 w-full h-full flex flex-col justify-center text-white text-center">
            <div className="mx-auto">
              <div className="w-12 h-[2px] bg-white"></div>
              <div className="w-12 h-[2px] rotate-90 bg-white"></div>
            </div>
            <h1 className="text-4xl font-semibold mt-8">{item?.name}</h1>
            <p className="font-medium mt-2">Sale up to {item?.discount}% off</p>
            <a
              href={`/${item?.url}`}
              className="underline font-bold text-lg mt-4"
            >
              Shop Now
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainCategory;
