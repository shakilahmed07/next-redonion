import React from "react";
import Image from "next/image";
import Meal1 from "../public/Breakfast/breakfast1.png";

const MenuItem = () => {
  return (
    <div className="flex flex-col items-center py-10 hover:shadow-lg hover:rounded-md space-y-1 hover:bg-white">
      <Image src={Meal1} height={150} width={150} alt="food" loading="lazy" />
      <p className="font-semibold text-lg">Healthy Meal Plan</p>
      <p className="text-xs text-gray-500">How We dream about our future</p>
      <p className="font-semibold text-md">$45.89</p>
    </div>
  );
};

export default MenuItem;
