import React from "react";

export default function ProductItem({ product: { id, image, category, title, price, option, description } }) {
    return (
        <li>
            <img src={image} alt={title} />
            <div className="textWrap">
                <p>{category}</p>
                <p>{title}</p>
                <p>{price}</p>
                <p>{option}</p>
                <p>{description}</p>
            </div>
        </li>
    )
}