import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
};
const MainCategory = () => {
  const [hover, setHover] = useState("");
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
        <div
          onMouseEnter={() => setHover(idx + 1)}
          onMouseLeave={() => setHover("")}
          key={idx}
          className="w-full h-full"
        >
          <div
            className={`left-0 top-0 w-full lg:h-96 h-80 flex flex-col justify-center text-white text-center duration-500 bg-no-repeat ${
              hover === idx + 1 ? "pt-12" : "py-12"
            }`}
            style={{
              backgroundImage: `url(${item?.img})`,
              backgroundPosition: "center",
              backgroundSize: `${hover === idx + 1 ? "120%" : "100%"}`,
            }}
          >
            <motion.div
              animate={hover === idx + 1 ? "open" : "closed"}
              variants={variants}
              className="mx-auto"
            >
              <div className="w-12 h-[2px] bg-white"></div>
              <div className="w-12 h-[2px] rotate-90 bg-white"></div>
            </motion.div>
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
