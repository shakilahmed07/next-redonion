import React from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";

const ServiceItem = ({ image, description, title, Icon }) => {
  return (
    <div className="flex flex-col items-center p-2">
      <img src={image} alt={title} className="h-[300px] xl:w-[200]" />
      {/* icon */}
      <div className="flex py-5">
        <div className="flex flex-col space-y-1 items-start">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-gray-500 max-w-sm">{description}</p>
          <div className="flex items-center space-y-1">
            <p className="font-semibold text-blue-600">see more </p>
            <ChevronRightIcon className="h-5 p-1 bg-green-500 rounded-full text-white ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
