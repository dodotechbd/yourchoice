import React from "react";

const ShopCard = ({ data }) => {
  console.log(data);

  return (
    <div class="flex items-center  ">
      <div class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
        <img class="rounded-xl" src={data.image} />
        <div class="flex justify-between items-center">
          <div>
            <h1 class="mt-5 text-2xl font-semibold"></h1>
            <p class="mt-2">{data.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
