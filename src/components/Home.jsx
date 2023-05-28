import React from "react";

import "../styles/Home.scss";
import ProductCard from "./ProductCard";
import { toast } from "react-hot-toast";

const img1 =
    "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
    "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";

const Home = () => {
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

    const addToCartHandler = (options) => {
        console.log(options);
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
            ))}
        </div>
    );
};

export default Home;
