import React from "react";
import MenuItem from "./MenuItem";
import lunch from "../data/lunch";

const MenuItems = ({ menuItems }) => {
  return (
    <div className="py-10 bg-gray-50">
      <div className="flex space-x-4 items-center justify-center font-semibold mb-5">
        <p className="menuItem border-red-600">Breakfast</p>
        <p className="menuItem ">Lunch</p>
        <p className="menuItem">Dinner</p>
      </div>

      {/* Menu Item */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-5 px-20">
        {menuItems.map((item) => (
          <MenuItem
            id={item._id}
            key={item._id}
            image={item.img}
            title={item.title}
            description={item.desc}
            price={item.prices}
          />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center py-5">
        <button
          type="submit"
          className="bg-gray-400 text-sm text-white px-8 py-2 rounded-md"
        >
          Checkout Your Food
        </button>
      </div>
    </div>
  );
};

export default MenuItems;
