import { motion } from "framer-motion";
import React from "react";

const Banner = () => {
  return (
    <div className="h-[65vh] relative">
      <motion.div
        initial={{ scale: 1.4 }}
        whileInView={{ scale: 1.0, transition: { duration: .8 } }}
        className="absolute w-full h-full z-[-1]"
      >
        <img
          src="https://cdn.shopify.com/s/files/1/0064/4435/1539/files/Home-Furniture-slider-1.jpg?v=1658374519&width=1370"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <div className="lg:w-1/2 lg:pt-28 flex flex-col justify-center h-full items-start text-white lg:ml-24 ml-8">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100, transition: { duration: 0.4 } }}
          className="lg:text-lg font-medium"
        >
          Mid-Season Sale
        </motion.h2>
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100, transition: { duration: 0.6 } }}
          className="lg:text-5xl text-xl my-2 font-bold"
        >
          Huge Saving on <br /> Sofas & Dining Sets
        </motion.h1>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100, transition: { duration: 0.8 } }}
          className="lg:text-lg my-4 lg:my-7"
        >
          Save up to 60% off on selected items.
        </motion.p>
        <motion.button
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100, transition: { duration: 1 } }}
          className="font-bold border-b-2 border-white"
        >
          Shop Now
        </motion.button>
      </div>
    </div>
  );
};

export default Banner;
