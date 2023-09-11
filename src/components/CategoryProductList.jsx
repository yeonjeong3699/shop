import React from "react";
import CategoryList from "./CategoryList";
import DetailPageEvent from "./DetailPageEvent";

export default function CategoryProductList({ category, product }) {
    return (
        <div className="container">
            <CategoryList />
            <h2 className="categoryTitle">{category}</h2>
            <ul className="productList">
                {product.map((product) => (
                    <li key={product.id}>
                        <DetailPageEvent product={product} />
                    </li>
                ))}
            </ul>
        </div>
    )
}