import React, { useEffect, useState } from "react";
import axios from "axios";

import "../styles/Home.scss";
import ProductCard from "./ProductCard";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 =
    "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
    "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";

const Home = () => {
    // const [productList, setProductList] = useState([]);
    // const fetchCoins = async () => {
    //     try {
    //         const { data } = await axios.get(
    //             "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr"
    //         );
    //         // console.log(data);

    //         setProductList(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // useEffect(() => {
    //     fetchCoins();
    // }, []);

    const productList = [
        {
            name: "Mac Book",
            price: 12000,
            imgSrc: img1,
            id: "asdhajsdbhjabhsjdfdfv",
        },
        {
            name: "Black Shoes",
            price: 490,
            imgSrc: img2,
            id: "sdjfdlaajsdbhjabhsjdfdfv",
        },
    ];

    const dispatch = useDispatch();

    const addToCartHandler = (options) => {
        dispatch({ type: "addToCart", payload: options });
        dispatch({ type: "calculatePrice" });
        toast.success("Added to Cart");
    };

    return (
        <div className="home">
            {productList.map((item) => (
                <ProductCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    imgSrc={item.imgSrc}
                    handler={addToCartHandler}
                />
                // <ProductCard
                //     key={item.id}
                //     id={item.id}
                //     name={item.name}
                //     price={item.current_price}
                //     imgSrc={item.image}
                //     handler={addToCartHandler}
                // />
            ))}
        </div>
    );
};

export default Home;
