import React from "react";
import DetailPageEvent from "./DetailPageEvent";

export default function ProductItem({ product: { id, image, category, title, price, option, description } }) {
    return (
        <DetailPageEvent product={{ id, image, category, title, price, option, description }} />
    )
}