import React, { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList";
import { getCategoryProduct } from "../api/firebase";

export default function Cushion() {
    const [product, setProduct] = useState([]);
    const category = '방석';

    useEffect(() => {
        getCategoryProduct(category)
            .then((product) => {
                setProduct(product);
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    return (
        <>
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
                                    <p className="itemPrice">{product.price.toLocaleString()}원 ~</p>
                                    <p className="option">{product.option.join(', ')}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}