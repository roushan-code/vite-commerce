import React, { Fragment, useEffect, useRef } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import Metadata from "../layout/Metadata";
import { toast } from 'react-toastify';
import {
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js"
import axios from "axios";
import "./payment.css";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import EventIcon from '@mui/icons-material/Event';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useNavigate } from "react-router-dom";
import { clearErrors } from "../../actions/productAction";
import { createOrder } from "../../actions/orderAction";


const Payment = () => {
    
    // const orderInfo = orderInfoString ? JSON.parse(orderInfoString) : null;
    const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const stripe = useStripe();
    const elements = useElements();
    const payBtn = useRef(null);

    const { shippingInfo, cartItems } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.user);
    const { error } = useSelector((state) => state.newOrder);

    const paymentData = {
        amount: Math.round(orderInfo.totalPrice * 100),
        description: "two electronic product bills first one is mobile and second one tshirt",
    };

    const order = {
        shippingInfo,
        orderItems: cartItems,
        itemsPrice: orderInfo.subtotal,
        taxPrice: orderInfo.tax,
        shippingPrice: orderInfo.shippingCharges,
        totalPrice: orderInfo.totalPrice,

    };
    // console.log(order);

    const submitHandler = async (e) => {
        e.preventDefault();

        payBtn.current.disabled = true;
        try {
            const config = {
                headers: { 'Content-Type': 'application/json', },
            };
            const { data } = await axios.post(
                "/api/v1/payment/process",
                paymentData,
                config
            );

            const client_secret = data.client_secret;

            if (!stripe || !elements) return;

            const result = await stripe.confirmCardPayment(client_secret, {
                payment_method: {
                    card: elements.getElement(CardNumberElement),
                    billing_details: {
                        name: user.name,
                        email: user.email,
                        address: {
                            line1: shippingInfo.address,
                            city: shippingInfo.city,
                            state: shippingInfo.state,
                            postal_code: shippingInfo.pinCode,
                            country: shippingInfo.country,
                        },
                    },
                },
            });

            if (result.error) {
                payBtn.current.disabled = false;
                toast.error(result.error.message);
            } else {
                if (result.paymentIntent.status === "succeeded") {
                    order.paymentInfo = {
                        id: result.paymentIntent.id,
                        status: result.paymentIntent.status,
                    };
                    // console.log(error);
                    dispatch(createOrder(order));
                    navigate("/success");
                } else {
                    toast.error("There's some issue while processing payment");
                }
            }
        } catch (error) {
            payBtn.current.disabled = false;
            toast.error(error.response.data.message);
        }
    };
    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, error, toast]);

    return (
        <Fragment>
            <Metadata title="Payment" />
            <CheckoutSteps activeStep={2} />
            <div className="paymentContainer">
                <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
                    <h2 className="h22">Card Info</h2>
                    <div>
                        <CreditCardIcon />
                        <CardNumberElement className="paymentInput" />
                    </div>
                    <div>
                        <EventIcon />
                        <CardExpiryElement className="paymentInput" />
                    </div>
                    <div>
                        <VpnKeyIcon />
                        <CardCvcElement className="paymentInput" />
                    </div>

                    <input
                        type="submit"
                        value={`Pay - ₹${orderInfo && orderInfo.totalPrice}`}
                        ref={payBtn}
                        className="paymentFormBtn"
                    />
                </form>
            </div>
        </Fragment>
    )
}

export default Payment