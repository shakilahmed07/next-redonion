import React, { useEffect, useState } from "react";
import { getSession, signIn } from "next-auth/client";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { reset } from "../redux/cartSlice";
// paypal
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  // useState
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);
  const router = useRouter();
  // redux
  const dispatch = useDispatch();
  // paypal
  const amount = "2";
  const currency = "USD";
  const style = { layout: "vertical" };

  // order api
  const orderCreate = async (data) => {
    try {
      const res = await axios.post(
        "https://protected-ridge-45643.herokuapp.com/api/orders",
        data
      );
      if (res.status === 200) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const ButtonWrapper = ({ currency, showSpinner }) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              // Your code here after capture the order
              const shipping = details.purchase_units[0].shipping;
              orderCreate({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: cart.total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };

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
          {cart.products.map((product) => (
            <tr key={product._id}>
              <td>
                <div>
                  <img src={product.img} alt="" className="h-28 w-30" />
                </div>
              </td>
              <td>
                <span className="text-red-700 font-bold">{product.title}</span>
              </td>
              <td>
                {product.extras.map((extra) => (
                  <span key={extra._id}>{extra.text}, </span>
                ))}
              </td>
              <td>
                <span>${product.price}</span>
              </td>
              <td>
                <span>{product.quantity}</span>
              </td>
              <td>
                <span className="font-bold">
                  ${product.price * product.quantity}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Right */}
      <div className="bg-gray-800 text-white px-14 py-9 w-3/12">
        <div className="space-y-4 flex flex-col items-start justify-between">
          <b className="text-lg">CART TOTAL</b>
          <div>
            <b>Subtotal : </b> ${cart.total}
          </div>
          <div>
            <b>Discount : </b> $0.00
          </div>
          <div>
            <b>Total : </b> ${cart.total}
          </div>
          {open ? (
            <div>
              <button
                className="bg-white text-red-500 text-sm font-bold py-1 w-full mb-4"
                onClick={() => setCash(true)}
              >
                CASH ON DELIVERY
              </button>
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "AQbFBhJz5Am6Ajedio7QnzXbgXQ1tSB0hvgo1rmqTTtezq5ZtCoJyT4T3cFWeRdNc5CxJPxmofPYy9MC",
                  components: "buttons",
                  currency: "USD",
                  "disable-funding": "credit,card,p24",
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
            </div>
          ) : (
            <button
              className="bg-white text-red-500 text-sm font-bold px-14 py-1 w-full"
              onClick={() => setOpen(true)}
            >
              CHECKOUT NOW!
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
