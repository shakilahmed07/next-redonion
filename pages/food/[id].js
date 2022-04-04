import { ShoppingCartIcon } from "@heroicons/react/outline";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const FoodDetails = ({ menuItem }) => {
  const [price, setPrice] = useState(menuItem.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);

  // Redux Dispatch
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = menuItem.prices[sizeIndex] - menuItem.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== extra._id));
    }
  };

  // function cart

  const handleCart = () => {
    dispatch(addProduct({ ...menuItem, extras, price, quantity }));
  };

  return (
    <div className="h-screen xl:px-20 px-5 grid grid-cols-2 xl:gap-2">
      <div className="xl:space-y-8 space-y-4 max-w-xl items-center xl:mt-20 mt-10">
        <h1 className="xl:text-5xl text-xl font-semibold text-gray-800">
          {menuItem.title}
        </h1>
        <p className="xl:text-sm text-xs xl:max-w-md text-gray-500">{menuItem.desc}</p>
        <p className="text-4xl font-semibold text-red-600">${price}</p>
        {/* choose size */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Choose The Size</h3>
          <div className="flex space-x-4 mb-2">
            <div
              className="bg-gray-500 py-1 px-4 rounded-lg text-white"
              onClick={() => handleSize(0)}
            >
              <span>small</span>
            </div>
            <div
              className="bg-gray-400 py-1 px-4 rounded-lg text-white"
              onClick={() => handleSize(1)}
            >
              <span>Medium</span>
            </div>
            <div
              className="bg-gray-400 py-1 px-4 rounded-lg text-white"
              onClick={() => handleSize(2)}
            >
              <span>Large</span>
            </div>
          </div>
          {/* additional */}
          <div className="space-y-1">
            <h3 className="font-semibold">Choose Additional</h3>
            <div className="xl:flex xl:space-x-4">
              {menuItem.extraOptions.map((option) => (
                <div key={option._id}>
                  <input
                    type="checkbox"
                    id={option.text}
                    name={option.text}
                    onChange={(e) => handleChange(e, option)}
                    className="mr-2"
                  />
                  <label htmlFor="double">{option.text}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-start justify-start">
          <input
            type="number"
            name=""
            id=""
            defaultValue={1}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-10 text-center border-2"
          />
          <div className="flex bg-red-600 rounded-full px-4 py-[5px] w-24 ml-4">
            <ShoppingCartIcon className="w-6 h-6 text-white mr-2" />
            <button className="text-white font-semibold" onClick={handleCart}>
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Food image */}
      <div className="items-center mt-10 ml-4">
        <img src={menuItem.img} alt="" className="xl:h-[90%]" />
      </div>
    </div>
  );
};

// This gets only single called request
export const getServerSideProps = async ({ params }) => {
  // Fetch data from external API
  const res = await axios.get(
    `https://protected-ridge-45643.herokuapp.com/api/products/${params.id}`
  );

  // Pass data to the page via props
  return {
    props: {
      menuItem: res.data,
    },
  };
};

export default FoodDetails;
