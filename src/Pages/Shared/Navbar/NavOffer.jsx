import React from "react";

const NavOffer = () => {
  const offerRange = 50;
  const offerName = "furniture & kitchen";
  return (
    <div className="bg-[#2A6876] text-white text-center text-sm lg:text-md lg:py-2 py-5">
      <p>
        Save now: {offerRange}%{" "}
        <a href="#" className="underline font-bold">
          {offerName}
        </a>{" "}
        discount* | Order hotline:{" "}
        <a href="#" className="underline font-bold">
          1-(090)-123-ELLA
        </a>
      </p>
    </div>
  );
};

export default NavOffer;
