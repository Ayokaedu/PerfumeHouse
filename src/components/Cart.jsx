import React, { useState, useContext } from "react";
import { perfumes } from "../data";
import { CartContext } from "../context";
import ConfirmOrderModal from "./ConfirmOrderModal";
const Cart = () => {
  const {
    cart,
    totalPrice,
    removeItemFromCart,
    handleIncrease,
    handleDecrease,
    showModal,
    setShowModal,
    confirmOrder,
  } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="rounded-2 border border-1 border-secondary p-2">
        <h2 className="fs-4 mb-4">My Cart Preview</h2>
        <h3 className="fs-5 text-danger">Cart is Empty</h3>
      </div>
    );
  }
  return (
    <div
      className="rounded-2 border border-1 border-secondary p-2"
      style={{ width: "320px" }}
    >
      {showModal && (
        <ConfirmOrderModal showModal={showModal} setShowModal={setShowModal} />
      )}
      <h2 className="fs-4 mb-4">My Cart Preview</h2>
      <div>
        {cart.map((cartItem) => {
          return (
            <div
              key={cartItem.id}
              className="d-flex justify-content-between mb-4"
            >
              <img src={cartItem.image} alt="" style={{ width: "95px" }} />
              <div>
                <h2 className="fs-6">{cartItem.title} </h2>
                <button
                  className={
                    cartItem.quantity <= 1
                      ? "bg-secondary-subtle text-white  w-25 h-25 "
                      : "main-color-bg text-white border-0  w-25 h-25"
                  }
                  onClick={() => handleDecrease({ cartItem })}
                  disabled={cartItem.quantity <= 1}
                >
                  -
                </button>{" "}
                <span>{cartItem.quantity}</span>{" "}
                <button
                  className="main-color-bg text-white border-0  w-25 h-25"
                  onClick={() => handleIncrease({ cartItem })}
                >
                  {" "}
                  +
                </button>
                <div className="d-flex align-items-center justify-content-between mt-2">
                  <h3 className="fs-6 gap-2">#{cartItem.price} </h3>
                  <button
                    className="btn btn-sm btn-outline-danger w-50"
                    onClick={() => removeItemFromCart(cartItem)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="d-flex align-items-center justify-content-between">
        <p className="text-secondary fs-6">Sub Total</p>
        <h3 className="fs-5">{totalPrice}</h3>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <p className="text-secondary fs-6">Delivery</p>
        <h3 className="fs-5">2,000</h3>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <p className="text-secondary fs-6">Total</p>
        <h3 className="fs-5">{totalPrice}</h3>
      </div>

      <button
        onClick={confirmOrder}
        className="main-color-bg border-0 p-2 rounded-2 w-100 my-2 text-white"
      >
        Confirm Order
      </button>
    </div>
  );0
};

export default Cart;

{
  /* <div */
}
//       style={{ width: "350px", height: "897px", border: "1px solid grey" }}
//       className="container py-2 "
//     >
//       <h3 className="text-center">My Cart Preview</h3>
//       <div className="d-flex flex-column p-2">
//         {perfumes.slice(3, 6).map((perfume) => {
//           return (
//             <div className="d-flex mt-4 mb-3 gap-4">
//               <div className="row">
//                 <img
//                   src={perfume.image}
//                   style={{ width: "250px", height: "180px" }}
//                   alt={perfume.title}
//                 />
//               </div>
//               <div>
//                 <p className="fw-bold">{perfume.title}</p>
//                 <div className="d-flex gap-2 mb-4">
//                   <button
//                     style={{ backgroundColor: "#D2D2D2", width: "25px" }}
//                     className="text-white border-0 h-25"
//                   >
//                     -
//                   </button>
//                   <p>2</p>
//                   <button className="main-color-bg text-white border-0 h-25"  style={{width:'25px'}}>
//                     +
//                   </button>
//                 </div>
//                 <div className="d-flex gap-5">
//                   <p className="fw-bold ">#{perfume.price}</p>
//                   <button
//                     style={{
//                       border: "1px solid red",
//                       backgroundColor: "transparent",
//                       width: "97px",
//                     }}
//                     className="text-danger rounded-1 "
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <div className="d-flex flex-column">
//         <div className="d-flex justify-content-between">
//           <p>Sub Total</p>
//           <p>#0.00</p>
//         </div>
//         <div className="d-flex justify-content-between">
//           <p>Delivery</p>
//           <p>#0.00</p>
//         </div>
//         <div className="d-flex justify-content-between">
//           <p>Total</p>
//           <p>#0.00</p>
//         </div>
//       </div>
//       <button
//         style={{ height: "40px" }}
//         className="w-100 rounded-2 main-color-bg text-white border-0"
//       >
//         Confirm Order
//       </button>
//     </div>
//   );
// }
