import React from "react";
import DetailPageEvent from "./DetailPageEvent";

export default function SearchList({ products: { id, image, category, title, price, option, description } }) {
    return (
        // <ul>
        //     {result.map((item) => (
        //         <li key={item.id}>
        //             <img src={item.image} alt={item.title} />
        //             <div className="text-box">
        //                 <p className="title">{item.title}</p>
        //                 <p className="option">{item.option}</p>
        //             </div>
        //         </li>
        //     ))}
        // </ul>
        <li>
            <DetailPageEvent product={{ id, image, category, title, price, option, description }} />
        </li>
    )
}