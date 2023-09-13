import React from "react";
import useCart from "../context/useCart";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti"

export default function CartList({ product, index }) {
    const { addItemCart, deleteItem } = useCart();

    const setPrice = product.price.toLocaleString();

    const plusItem = () => {
        addItemCart.mutate({ ...product, quantity: product.quantity + 1 })
    }

    const minusItem = () => {
        if(product.quantity < 2){
            alert('상품 갯수는 1개보다 적을 수 없습니다.')
            return
        }
        addItemCart.mutate({ ...product, quantity: product.quantity - 1 })
    }

    const itemDelete = ()=>{
        deleteItem.mutate(product.id)
    }

    return (
        <li>
            <p>{index}</p>
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <p>{product.option}</p>
            <p>{setPrice}원</p>
            <p>{product.quantity}개</p>
            <div className="quantity-arrow-box">
                <TiArrowSortedUp onClick={plusItem} className="quantity-arrow" />
                <TiArrowSortedDown onClick={minusItem} className="quantity-arrow" />
            </div>

            <button onClick={() => itemDelete(product.id)}>삭제</button>
        </li>
    )
}