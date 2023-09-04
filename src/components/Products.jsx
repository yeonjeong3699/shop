import { useQuery } from "@tanstack/react-query"; //
import React from "react";
import { getProducts } from "../api/firebase";
import ProductItem from "./ProductItem";

export default function Products() {
    const {
        isLoading,
        isError,
        data: products,
        error
    } = useQuery(['products'], getProducts);
    console.log(products)

    if (isLoading) {
        return <p>상품 정보를 받아오고 있습니다.</p>
    }
    if (isError) {
        return <p>상품 정보를 받아오지 못했습니다.</p>
    }

    return (
        <ul>
            {products.map((products) => (
                <ProductItem key={products.id} product={products} />
            ))}
        </ul>
    )
}