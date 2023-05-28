import React from "react";
import { AiFillDelete } from "react-icons/ai";

const CartItem = ({
    id,
    name,
    price,
    imgSrc,
    qty,
    increment,
    decrement,
    deleteHanlder,
}) => (
    <div className="cartItem">
        <img src={imgSrc} alt={name} />
        <article>
            <h3>{name}</h3>
            <p>{price}</p>
        </article>

        <div>
            <button onClick={() => decrement(id)}>-</button>
            <button onClick={() => increment(id)}>+</button>
        </div>

        <AiFillDelete onClick={() => deleteHanlder(id)} />
    </div>
);

export default CartItem;
