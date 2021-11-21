import React from "react";
import ServiceItem from "./ServiceItem";

const ServiceItems = () => {
  return (
    <div className="py-5 px-10">
      <div className="space-y-6 py-10 px-10">
        <h2 className="text-4xl text-gray-700">Why you choose us</h2>
        <p className="text-sm max-w-sm text-gray-600">
          Suscipit nulla dolor officiis repudiandae impedit animi, officia
          atque, inventore sunt iusto vitae eveniet?
        </p>
      </div>
      {/* services item */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 w-full">
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
      </div>
    </div>
  );
};

export default ServiceItems;
