import React from "react";

import "../styles/ProductCard.scss";

const ProductCard = ({ name, id, price, handler, imgSrc }) => {
    return (
        <div className="productCard">
            <img src={imgSrc} alt={name} />
            <p>{name}</p>
            <h4>${price}</h4>
            <button
                onClick={() =>
                    handler({ id, name, quantity: 1, price, imgSrc })
                }
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
