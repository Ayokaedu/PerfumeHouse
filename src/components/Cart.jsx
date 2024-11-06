import React from "react";
import { perfumes } from "../data";
import SinglePerfume from "./SinglePerfume";

function Cart({ id, title, image, rating, price, oldPrice, itemsLeft }) {
  return (
    <div
      style={{ width: "350px", height: "897px", border: "1px solid grey" }}
      className="container py-2 "
    >
      <h3 className="text-center">My Cart Preview</h3>
      <div className="d-flex flex-column p-2">
        {perfumes.slice(3, 6).map((perfume) => {
          return (
            <div className="d-flex mt-4 mb-3 gap-4">
              <div className="row">
                <img
                  src={perfume.image}
                  style={{ width: "250px", height: "180px" }}
                  alt={perfume.title}
                />
              </div>
              <div>
                <p className="fw-bold">{perfume.title}</p>
                <div className="d-flex gap-2 mb-4">
                  <button
                    style={{ backgroundColor: "#D2D2D2", width: "20px" }}
                    className="text-white border-0 rounded-1 h-25"
                  >
                    -
                  </button>
                  <p>2</p>
                  <button className="main-color-bg text-white border-0 rounded-1 h-25">
                    +
                  </button>
                </div>
                <div className="d-flex gap-5">
                  <p className="fw-bold ">#{perfume.price}</p>
                  <button
                    style={{
                      border: "1px solid red",
                      backgroundColor: "transparent",
                      width: "97px",
                    }}
                    className="text-danger rounded-1 "
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between">
          <p>Sub Total</p>
          <p>#0.00</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Delivery</p>
          <p>#0.00</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Total</p>
          <p>#0.00</p>
        </div>
      </div>
      <button
        style={{ height: "40px" }}
        className="w-100 rounded-2 main-color-bg text-white border-0"
      >
        Confirm Order
      </button>
    </div>
  );
}

export default Cart;
