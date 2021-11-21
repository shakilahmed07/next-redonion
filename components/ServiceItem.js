import React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  TruckIcon,
} from "@heroicons/react/outline";

// https://i.ibb.co/NrGjCRw/adult-blur-blurred-background-687824.png
// https://i.ibb.co/CvM6mmx/architecture-building-city-2047397.png
// https://i.ibb.co/NVY9PyL/chef-cook-food-33614.png

const ServiceItem = () => {
  return (
    <div className="flex flex-col items-center p-2">
      <img
        src="https://i.ibb.co/CvM6mmx/architecture-building-city-2047397.png"
        alt=""
        height={400}
        width={400}
      />
      {/* icon */}
      <div className="flex py-5 px-5">
        <TruckIcon className="h-10 text-white bg-red-600 rounded-full p-2" />

        <div className="flex flex-col pl-4 space-y-1 items-start">
          <h3 className="font-semibold text-lg">Fast Delivery</h3>
          <p className="text-sm text-gray-600 max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sint
            iusto eum eveniet accusantium incidunt.
          </p>
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
