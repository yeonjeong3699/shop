import React from "react";
import useCart from "../context/useCart";

export default function Cart() {
    const { cartInfor: { data: products }, deleteItem } = useCart();
    const IsItem = products && products.length > 0;

    const itemDelete = (id) => deleteItem.mutate(id);


    return (
        <div className="container">
            <h2>장바구니 리스트</h2>
            {!IsItem && <p>장바구니에 상품이 없습니다.</p>}
            {IsItem && (
                <ul className="cartList">
                    {products && products.map((product) => (
                        <li key={product.id}>
                            <img src={product.image} alt={product.title} />
                            <p>{product.title}</p>
                            <p>{product.option}</p>
                            <p>{product.price}원</p>
                            <p>{product.quantity}개</p>

                            <button onClick={()=>itemDelete(product.id)}>삭제</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
    }