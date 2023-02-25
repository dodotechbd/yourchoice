import React from "react";
import "./Loading.css";

const Loading = ({ show }) => {
  return (
    show && (
      <div className="flex flex-col gap-4 items-center justify-center fixed z-50 top-0 left-0 h-screen w-screen bg-[#2A6876]">
        <div class="loading">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h3 className="uppercase text-2xl text-white">Loading...</h3>
      </div>
    )
  );
};

export default Loading;
