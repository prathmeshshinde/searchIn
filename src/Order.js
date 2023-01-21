import React from "react";
import data from "./data.js";

const Order = () => {
  return (
    <div className="app">
      <div className="container">
        {data.map((items, index) => (
          <div>
            <div className="product">
              <img
                alt={items.text}
                style={{
                  width: "180px",
                  height: "150px",
                  padding: "10px 20px",
                }}
                src={items.image}
              />
              <div className="text">
                <p className="product-text">{items.text}</p>
                <p className="product-price">₹{items.price}</p>
              </div>
              <div>
                <button className="pro-button">Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="checkout">
        <div className="content">
          <table>
            <tr style={{ borderTop: "1px solid #ddd" }}>
              <th>Name</th>
              <th>Quantity</th>
              <th>Cost</th>
              <td></td>
            </tr>
            <tr style={{ fontWeight: "500" }}>
              <td style={{ width: "150px", fontWeight: "500" }}>
                Godrej Cinthol Cool Soap 75x3gm
              </td>
              <td>1</td>
              <td>₹102</td>
              <td>
                <img style={{ width: "25px" }} src="dustbin.png" alt="item" />
              </td>
            </tr>
          </table>
          <div className="text-price">
            <p className="tax">Discount: ₹20 </p>
            <p className="tax">Tax: ₹10 </p>
            <p className="cost">
              Total Cost: ₹ <span className="p102"> 102</span>
            </p>
            <p className="tax">Total Quantity: 1</p>
          </div>

          <button className="order-button">Confirm Order</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
