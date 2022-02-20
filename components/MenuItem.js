import React from "react";
import Link from "next/link";

const MenuItem = ({ image, title, description, price, id }) => {
  return (
    <Link href={`/food/${id}`}>
      <div className="flex flex-col items-center py-10 hover:shadow-lg hover:rounded-md hover:bg-white space-y-2">
        <img src={image} height={150} width={150} alt={title} loading="lazy" />
        <p className="font-semibold text-lg">{title}</p>
        <p className="text-xs text-gray-500 w-4/5 mx-auto">{description}</p>
        <p className="font-semibold text-lg text-red-600">${price[0]}</p>
      </div>
    </Link>
  );
};

export default MenuItem;
