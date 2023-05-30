import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";

import "../styles/Header.scss";
import { useSelector } from "react-redux";

const Header = () => {
    const { cartItems } = useSelector((state) => state.cart);
    return (
        <nav>
            <Link to={"/"}>
                <h2>
                    <FaShoppingCart />
                </h2>
            </Link>

            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/cart"}>
                    <FiShoppingBag />

                    <p>{cartItems.length}</p>
                </Link>
            </div>
        </nav>
    );
};

export default Header;
