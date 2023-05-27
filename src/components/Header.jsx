import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";

import '../styles/Header.scss'

const Header = () => {
    return (
        <nav>
            <h2>Logo</h2>

            <Link to={"/"}>Home</Link>
            <Link to={"/cart"}>
                <FiShoppingBag />

                <p>0</p>
            </Link>
        </nav>
    );
};

export default Header;
