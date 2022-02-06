import React, { useEffect, useState } from "react";
import { getSession, signIn } from "next-auth/client";

const Cart = () => {
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
    <div className="flex text-left justify-between p-14">
      {/* left */}

      <table className="table-auto w-9/12 mr-8">
        <thead>
          <tr className="font-bold text-lg">
            <th className="pl-8">Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>
                <img
                  src="https://i.ibb.co/3pwyKHt/lunch4.png"
                  alt=""
                  className="h-28 w-30"
                />
              </div>
            </td>
            <td>
              <span className="text-red-700 font-bold">Food Name</span>
            </td>
            <td>
              <span>Double, spicy</span>
            </td>
            <td>
              <span>$54.02</span>
            </td>
            <td>
              <span>2</span>
            </td>
            <td>
              <span className="font-bold">$54.02</span>
            </td>
          </tr>
          {/* second */}
          <tr>
            <td>
              <div className="">
                <img
                  src="https://i.ibb.co/3pwyKHt/lunch4.png"
                  alt=""
                  className="h-28 w-30"
                />
              </div>
            </td>
            <td>
              <span className="text-red-700 font-bold">Food Name</span>
            </td>
            <td>
              <span>Double, spicy</span>
            </td>
            <td>
              <span>$54.02</span>
            </td>
            <td>
              <span>2</span>
            </td>
            <td>
              <span className="font-bold">$54.02</span>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Right */}
      <div className="bg-gray-800 text-white px-14 py-9 w-3/12">
        <div className="space-y-4 flex flex-col items-start justify-between">
          <b className="text-lg">CART TOTAL</b>
          <div>
            <b>Subtotal : </b> $546.47
          </div>
          <div>
            <b>Discount : </b> $5.00
          </div>
          <div>
            <b>Total : </b> $546.47
          </div>
          <button className="bg-white text-red-500 text-sm font-bold px-14 py-1 w-full">
            CHECKOUT NOW!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
