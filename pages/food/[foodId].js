import { ShoppingCartIcon } from "@heroicons/react/outline";
import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import lunch from "../../data/lunch";

const FoodDetails = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen px-20">
        <div className="space-y-8 max-w-xl items-center mt-20">
          <h1 className="text-5xl font-semibold text-gray-800">
            Bagel And Cream Cheese
          </h1>
          <p className="text-sm max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s.
          </p>
          <p className="text-4xl font-semibold text-gray-800">$9.50</p>
          <div className="flex bg-red-600 rounded-full px-4 py-[5px] w-24">
            <ShoppingCartIcon className="w-6 h-6 text-white mr-2" />
            <button className="text-white font-semibold">Add</button>
          </div>

          <div className="flex">
            <img
              className="h-40 cursor-pointer w-40 p-2"
              src="https://i.ibb.co/qY78ynw/lunch2.png"
              alt=""
            />
            <img
              className="h-40 cursor-pointer w-40 p-2"
              src="https://i.ibb.co/rb6px4p/lunch3.png"
              alt=""
            />
          </div>
        </div>

        {/* Food image */}
        <div className="items-center mt-10">
          <img
            src="https://i.ibb.co/3pwyKHt/lunch4.png"
            alt=""
            className="h-[90%]"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FoodDetails;

// export const getStaticPaths = async () => {
//   const res = await fetch(lunch);
//   const data = await res.json();

//   const paths = data.map((food) => {
//     return {
//       params: { id: food.id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   const id = context.params.id;
//   const res = await fetch(lunch + id);
//   const data = await res.json();

//   return {
//     props: {
//       food: data,
//     },
//   };
// };
