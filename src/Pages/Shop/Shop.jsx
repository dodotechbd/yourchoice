import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import ShopCard from "./ShopCard";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Shop = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("shop1.json").then((data) => {
      const shopData = data.data;
      setData(shopData);
    });
  }, [setData]);

  return (
    <div className="flex px-4 text-black">
      <div class="  lg:w-1/4 mt-6 ">
        <h1 class="sm:text-2xl text-2xl font-bold title-font  text-gray-900">
          Popular Category
        </h1>
        <p class=" flex-1  lg:w-1/2 w-12 front-bold leading-relaxed lg:mt-4   ">
          Pellentesque ante neque, faucibus et delito an pretium <br />
          vestibulum del varius quam
        </p>
      </div>
      <div className=" lg:w-4/6">
        <Swiper
          slidesPerView={4}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="flex bg-green-500 gap-3 ">
            {" "}
            {data?.map((data) => (
              <ShopCard key={data.id} data={data}></ShopCard>
            ))}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Shop;
