import React from "react";

import "../styles/Cart.scss";
import CartItem from "./CartItem";

const Cart = () => {
    return (
        <div className="cart">
            <main>
                <CartItem />
            </main>

            <aside>
                <h2>Subtotal: ${2000}</h2>
                <h2>Shipping: ${200}</h2>
                <h2>Tax: ${20}</h2>
                <h2>Total: ${2220}</h2>
            </aside>
        </div>
    );
};

export default Cart;
