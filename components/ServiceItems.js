import React from "react";
import ServiceItem from "./ServiceItem";

const serviceData = [
  {
    id: 1,
    image: "https://i.ibb.co/RcNhCfK/rod-long-k-Im-U-9-S9uh8-unsplash.jpg",
    title: "Fast Delivery",
    description:
      "Odio Vestibulum Quam Quam Nisl Scelerisque Vivamus In Varius Aenean Placerat Cras Lacinia Nisl Fusce Cubilia Laoreet Varius Accumsan Dictumst",
  },
  {
    id: 2,
    image: "https://i.ibb.co/vdZ0BVG/peter-dawn-m-M-L0yx5-Lc-Q-unsplash.jpg",
    title: "A Good Auto Responder",
    description:
      "Lectus Conubia Sem Adipiscing Tellus Dictumst Semper Enim Inceptos Gravida Sit Nam Curabitur Hendrerit Venenatis Non Nunc Quam Nunc Condimentum",
  },
  {
    id: 3,
    image: "https://i.ibb.co/ZNdwQyN/kai-pilger-t-L92-LY152-Sk-unsplash.jpg",
    title: "Home Delivery",
    description:
      "Accumsan Per Vehicula Orci Arcu Dapibus Nullam Luctus Laoreet Nulla Donec Venenatis Turpis Nostra Netus Vulputate Tellus Velit Lacinia Dapibus",
  },
];

const ServiceItems = () => {
  return (
    <div className="py-5 xl:px-10 px-2">
      <div className="space-y-6 py-10 px-10">
        <h2 className="text-3xl text-gray-700">Why you choose us</h2>
        <p className="text-sm max-w-sm text-gray-600">
          Suscipit nulla dolor officiis repudiandae impedit animi, officia
          atque, inventore sunt iusto vitae eveniet?
        </p>
      </div>
      {/* services item */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 w-full">
        {serviceData.map((item, image, description, title, Icon) => (
          <ServiceItem
            key={item.id}
            image={item.image}
            description={item.description}
            title={item.title}
            Icon={item.Icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceItems;
