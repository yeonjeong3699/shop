import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoryProduct } from "../api/firebase";
import CategoryProductList from "./CategoryProductList";
import SliderContent from "./SliderContent";

export default function CategoryPage() {
    const [product, setProduct] = useState([]);
    const { category } = useParams(); //category에 담겨있는 정보를 가져옴

    useEffect(() => {
        getCategoryProduct(category)
            .then((products) => {
                setProduct(products)
            })
            .catch((error) => {
                console.error(error);
            })
    }, [category])

    const SildePath = [
        "https://firebasestorage.googleapis.com/v0/b/shop-e0774.appspot.com/o/slide_1.jpg?alt=media&token=74b96404-20bc-446b-ab72-348d30228ece",
        "https://firebasestorage.googleapis.com/v0/b/shop-e0774.appspot.com/o/slide_2.jpg?alt=media&token=a74c24c6-f77e-4eb9-9d28-59adc0df1249",
        "https://firebasestorage.googleapis.com/v0/b/shop-e0774.appspot.com/o/slide_3.jpg?alt=media&token=d0071b88-4be8-417b-8f4f-a602c8a4bb20",
        "https://firebasestorage.googleapis.com/v0/b/shop-e0774.appspot.com/o/slide_4.jpg?alt=media&token=f3ae1712-a9f8-4f69-b63b-5356e43f788d"
    ]

    return (
        <>
            <SliderContent imgUrls={SildePath} />
            <CategoryProductList category={category} product={product} />
        </>
    )
}