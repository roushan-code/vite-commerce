import React, { Fragment } from "react";
import "./ConfirmOrder.css"
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Metadata from "../layout/Metadata.jsx";
import CheckoutSteps from "./CheckoutSteps.jsx";

const ConfirmOrder = () => {
    const navigate = useNavigate();
    const { shippingInfo, cartItems } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.user);
  
    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
  
    
    let shippingCharges = (subtotal > 1000) ? 0 : 200;
    
    const tax = subtotal * 0.18;
  
    const totalPrice = subtotal + tax + shippingCharges;
  
    const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;
  
    const proceedToPayment = () => {
      const data = {
        subtotal,
        shippingCharges,
        tax,
        totalPrice,
      };
  
      sessionStorage.setItem("orderInfo", JSON.stringify(data));
      // sessionStorage.setItem['orderInfo'] = JSON.stringify(data);


      navigate("/process/payment");
    };
  
    return (
      <Fragment>
        <Metadata title="Confirm Order" />
        <CheckoutSteps activeStep={1} />
        <div className="confirmOrderPage">
          <div>
            <div className="confirmshippingArea">
              <h2 className="h22">Shipping Info</h2>
              <div className="confirmshippingAreaBox">
                <div>
                  <p>Name:</p>
                  <span>{user && user.name}</span>
                </div>
                <div>
                  <p>Phone:</p>
                  <span>{shippingInfo.phoneNo}</span>
                </div>
                <div>
                  <p>Address:</p>
                  <span>{address}</span>
                </div>
              </div>
            </div>
            <div className="confirmCartItems">
              <h2 className="h22">Your Cart Items:</h2>
              <div className="confirmCartItemsContainer">
                {cartItems &&
                  cartItems.map((item) => (
                    <div key={item.product}>
                      <img src={item.image} alt="Product" />
                      <Link to={`/product/${item.product}`}>
                        {item.name}
                      </Link>{" "}
                      <span>
                        {item.quantity} X ₹{item.price} ={" "}
                        <b>₹{item.price * item.quantity}</b>
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          {/*  */}
          <div>
            <div className="orderSummary">
              <h2 className="h22">Order Summery</h2>
              <div>
                <div>
                  <p>Subtotal:</p>
                  <span>₹{subtotal}</span>
                </div>
                <div>
                  <p>Shipping Charges:</p>
                  <span>₹{shippingCharges}</span>
                </div>
                <div>
                  <p>GST:</p>
                  <span>₹{tax}</span>
                </div>
              </div>
  
              <div className="orderSummaryTotal">
                <p>
                  <b>Total:</b>
                </p>
                <span>₹{totalPrice}</span>
              </div>
  
              <button onClick={proceedToPayment}>Proceed To Payment</button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };
  
  export default ConfirmOrder;
  