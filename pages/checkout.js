import React, { useEffect, useState } from "react";
import { getSession, signIn } from "next-auth/client";
import { MinusIcon, PlusIcon } from "@heroicons/react/outline";

const checkout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);
  return (
    <div className="md:flex my-5 md:justify-center md:py-20 md:px-20 md:space-x-8">
      <div className="px-10 my-5 md:my-0 md:w-full">
        <p className="border-b-2 pb-2 font-semibold">Edit Delivery Details</p>
        <form className="flex flex-col my-2">
          <input
            className="focus:outline-none my-2  bg-gray-100 px-5 py-2 rounded-md"
            type="text"
            placeholder="Deliver to door"
          />
          <input
            className="focus:outline-none my-2  bg-gray-100 px-5 py-2 rounded-md"
            type="text"
            placeholder="107 Rd No 8"
          />
          <input
            className="focus:outline-none my-2  bg-gray-100 px-5 py-2 rounded-md"
            type="text"
            placeholder="Flat suite or floor"
          />
          <input
            className="focus:outline-none my-2  bg-gray-100 px-5 py-2 rounded-md"
            type="text"
            placeholder="Business Name"
          />
          <input
            className="focus:outline-none my-2  bg-gray-100 px-5 py-2 rounded-md"
            type="text"
            placeholder="Add delivery instruction"
          />

          <button
            className="bg-red-500 py-2 my-2 rounded-md text-white text-md"
            type="submit"
          >
            Save & Continue
          </button>
        </form>
      </div>
      {/* Right Section */}
      <div className="my-5 md:w-full">
        <div className="px-10">
          <div>
            <p className="font-semibold">From Gulshan Plaza Restaurant GPR</p>
            <p className="text-sm text-gray-700">Arriving in 20-30 min</p>
            <p className="text-sm text-gray-700">107 Rd No 8</p>
          </div>
          {/* cart item */}
          <div className="bg-gray-100 p-5 my-5 rounded-md">
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <img
                  src="https://i.ibb.co/3pwyKHt/lunch4.png"
                  alt=""
                  className="h-28"
                />
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold">Toast Fried Egg</h2>
                  <p className="text-xl font-semibold text-red-600">$12.00</p>
                  <p className="text-sm text-gray-700">Delivery free</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2 text-gray-700">
                <PlusIcon className="h-5" />
                <input
                  type="text"
                  className="w-10 border outline-none text-center py-1"
                />
                <MinusIcon className="h-5" />
              </div>
            </div>
          </div>
          <div className="my-5 space-y-1">
            <div className="flex justify-between">
              <p className="text-sm text-gray-600">subtotal * 4 item</p>
              <p className="text-sm text-gray-600">$45.89</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-600">Tax</p>
              <p className="text-sm text-gray-600">$4.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm text-gray-600">Delivery</p>
              <p className="text-sm text-gray-600">$2.00</p>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold">Total</p>
              <p className="font-semibold">$489.00</p>
            </div>
          </div>
          <button
            className="bg-gray-300 py-2 w-full my-2 rounded-md text-white text-md"
            type="submit"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default checkout;
