import React from "react";
import CartList from "../components/CartList";
import useCart from "../context/useCart";

export default function Cart() {
    const { cartInfor: { data: products }, deleteItem } = useCart();
    const IsItem = products && products.length > 0;

    const totalPrice = products && products.reduce( //reduce: 배열을 돌면서 콜백함수를 실행
        (prev, current) => prev + parseInt(current.price) * current.quantity, 0

        /*
        prev: 초기값 0, current: 현재 처리중인 아이템
        을 받아오며, 최종적으로 prev에 담아오는 역할을 한다.
        이 작업을 reduce로 배열에서 반복하며, 목록을 업데이트 한다.
        */
    )
    
    const delivery = 3000;

    return (
        <div className="container">
            <h2>장바구니 리스트</h2>
            {!IsItem && <p>장바구니에 상품이 없습니다.</p>}
            {IsItem && (
                <ul className="cartList">
                    {products && products.map((product, index) => (
                        <CartList key={product.id} product={product} index={index} />
                    ))}
                </ul>

            )}
            <div className="priceWrap">
                <p>상품 가격 : {totalPrice}원</p>
                <p>배송비 : {delivery}원</p>
                <p>총 가격 : {totalPrice + delivery}원</p>
                <button>주문하기</button>
            </div>
        </div>
    )
}