import React from "react";

import "../styles/Cart.scss";
import "../styles/MediaQuery.scss";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import OrderButton from "./OrderButton";

const Cart = () => {
    const dispatch = useDispatch();

    const { cartItems, subTotal, shipping, tax, total } = useSelector(
        (state) => state.cart
    );

    const incrementHandler = (id) => {
        dispatch({
            type: "addToCart",
            payload: { id },
        });

        dispatch({
            type: "calculatePrice",
        });
    };
    const decrementHandler = (id) => {
        dispatch({
            type: "decrement",
            payload: id,
        });

        dispatch({
            type: "calculatePrice",
        });
    };
    const deleteHandler = (id) => {
        dispatch({
            type: "deleteFromCart",
            payload: id,
        });

        dispatch({
            type: "calculatePrice",
        });
    };

    return (
        <div className="cart">
            <main>
                {cartItems.length > 0 ? (
                    cartItems.map((i) => (
                        <CartItem
                            key={i.id}
                            id={i.id}
                            name={i.name}
                            price={i.price}
                            imgSrc={i.imgSrc}
                            qty={i.quantity}
                            increment={incrementHandler}
                            decrement={decrementHandler}
                            deleteHandler={deleteHandler}
                        />
                    ))
                ) : (
                    <h1>Cart is Empty</h1>
                )}
            </main>

            <aside>
                <h2>Subtotal: ${subTotal}</h2>
                <h2>Shipping: ${shipping}</h2>
                <h2>Tax: ${tax}</h2>
                <h2>Total: ${total}</h2>

                <div>
                    <OrderButton />
                </div>
            </aside>
        </div>
    );
};

export default Cart;
