import React from "react";

const Banner = () => {
  return (
    <div className="h-[65vh] bg-cover bg-center bg-[url('https://cdn.shopify.com/s/files/1/0064/4435/1539/files/Home-Furniture-slider-1.jpg?v=1658374519&width=1370')]">
      <div className="lg:w-1/2 lg:pt-28 flex flex-col justify-center h-full items-start text-white lg:ml-24 ml-8">
        <h2 className="lg:text-lg font-medium">Mid-Season Sale</h2>
        <h1 className="lg:text-5xl text-xl my-2 font-bold">Huge Saving on <br /> Sofas & Dining Sets</h1>
        <p className="lg:text-lg my-4 lg:my-7">Save up to 60% off on selected items.</p>
        <button className="font-bold border-b-2 border-white">Shop Now</button>
      </div>
    </div>
  );
};

export default Banner;
