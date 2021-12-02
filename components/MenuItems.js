import React from "react";
import MenuItem from "./MenuItem";
import lunch from "../data/lunch";

const MenuItems = () => {
  return (
    <div className="py-10 bg-gray-50">
      <div className="flex space-x-4 items-center justify-center font-semibold">
        <p className="menuItem">Breakfast</p>
        <p className="menuItem border-red-600">Lunch</p>
        <p className="menuItem">Dinner</p>
      </div>

      {/* Menu Item */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-5 px-20">
        {lunch.map((item) => (
          <MenuItem
            id={item.id}
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
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
