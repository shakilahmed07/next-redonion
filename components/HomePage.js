import React from "react";
import MenuItems from "./MenuItems";
import ServiceItems from "./ServiceItems";

export default function HomePage({ menuItems }) {
  return (
    <>
      {/* Red Onion Banner */}
      <div
        className={`bg-header-banner bg-[#FCF4E0] h-[450px] bg-contain bg-center flex flex-col items-center justify-center bg-no-repeat`}
      >
        <h1 className="font-semibold text-gray-600 text-xl -mt-10 lg:-mt-0 lg:text-5xl">
          Best Food Waiting For Your Belly
        </h1>
        <form className="mt-8 items-center">
          <input
            className="px-5 py-2 rounded-full focus:outline-none"
            type="text"
            placeholder="Search food items"
          />
          <button
            className="bg-red-500 px-7 py-2 rounded-full -ml-10  text-white"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>

      {/* Restaurant Menu Items */}
      <MenuItems menuItems={menuItems} />
      {/* Restaurant Services Items */}
      <ServiceItems />
    </>
  );
}
