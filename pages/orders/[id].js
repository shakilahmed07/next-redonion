import axios from "axios";
import React from "react";
import styles from "../../styles/Order.module.css";

const Order = ({ order }) => {
  const status = 0;
  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <div className="flex p-14">
      {/* left */}

      <table className="table-auto mr-20 text-left w-9/12">
        <thead>
          <tr className="font-bold text-lg">
            <th>Order ID</th>
            <th>Customer</th>
            <th>Address</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td>
              <span>{order._id}</span>
            </td>
            <td>
              <span>{order.customer}</span>
            </td>
            <td>
              <span>savar 24/B</span>
            </td>
            <td>
              <span className="font-bold">$54.02</span>
            </td>
          </tr>
          {/* second */}
          <tr className="">
            <td>
              <span>12324687</span>
            </td>
            <td>
              <span>john doe</span>
            </td>
            <td>
              <span>savar 24/B</span>
            </td>
            <td>
              <span className="font-bold">$54.02</span>
            </td>
          </tr>
          {/* third */}
          <tr className="">
            <td>
              <span>12324687</span>
            </td>
            <td>
              <span>john doe</span>
            </td>
            <td>
              <span>savar 24/B</span>
            </td>
            <td>
              <span className="font-bold">$54.02</span>
            </td>
          </tr>
        </tbody>
        {/* Payment process */}
        <div className="mt-10 flex justify-between font-bold">
          <div className={statusClass(0)}>
            <span>Payment</span>
          </div>
          <div className={statusClass(1)}>
            <span>Preparing</span>
          </div>
          <div className={statusClass(2)}>
            <span>On the way</span>
          </div>
          <div className={statusClass(3)}>
            <span>Delivered</span>
          </div>
        </div>
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
          <button
            disabled
            className="bg-white text-green-500 text-sm font-bold px-14 py-1 w-full"
          >
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

// This gets only single called request
export const getServerSideProps = async ({ params }) => {
  // Fetch data from external API
  const res = await axios.get(`/api/orders/${params.id}`);

  // Pass data to the page via props
  return {
    props: {
      order: res.data,
    },
  };
};

export default Order;
