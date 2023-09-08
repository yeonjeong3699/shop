import React from "react";
import CategoryList from "./CategoryList";

export default function CategoryProductList({ category, product }) {
    return (
        <div className="container">
            <CategoryList />
            <h2 className="categoryTitle">{category}</h2>
            <ul className="productList">
                {product.map((product) => (
                    <li key={product.id}>
                        <div className="imgBox"><img src={product.image} alt={product.title} /></div>
                        <div className="textWrap">
                            <h3 className="itemTitle">{product.title}</h3>
                            <div className="itemFlex">
                                <p className="price">{product.price.toLocaleString()}원~</p>
                                <p className="option">{product.option.join(', ')}</p> {/* join: 배열의 모든 요소를 연결해 하나의 문자열로 만듬 */}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}