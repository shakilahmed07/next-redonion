import React from "react";

const Order = () => {
  return (
    <>
      {/* Order Complete */}
      <div className="h-screen">
        <div>{/* map image */}</div>
        <div>
          <img src="" alt="" />
          {/* line */}
          <div>
            <p>Your Location</p>
            <p>107 Rd No 7</p>
          </div>
          <div>
            <p>Shop Address</p>
            <p>Gulshan Plaza Restaurant</p>
          </div>
          <div>
            <p>10:45</p>
            <p>Estimated delivery time</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>10:45</p>
            <p>Estimated delivery time</p>
          </div>

          <button>Contact</button>
        </div>
      </div>
    </>
  );
};

export default Order;
