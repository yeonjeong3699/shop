import React from "react";
import CartList from "../components/CartList";
import useCart from "../context/useCart";
import { styled } from "styled-components";

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
        <CartWrapper className="container">
            <h2 className="title">장바구니</h2>
            {!IsItem && <p className="noItem">장바구니에 상품이 없습니다.</p>}
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
        </CartWrapper>
    )
}

const CartWrapper = styled.div`
    .title{
        font-family: 'GmarketSansBold';
        font-size: 30px;
        font-weight: normal;
        color: #333;
        margin-bottom: 20px;
    }
    .noItem{
        font-family: 'GmarketSansMedium';
        font-size: 30px;
        font-weight: normal;
        color: #333;
        margin-bottom: 20px;
    }
    .cartList{
        display: flex;
        flex-direction: column;
        gap: 16px;
        border-top: solid 1px #dddddd;
        padding: 24px 0px;
	li{
		display: flex;
		gap: 10px;
		align-items: center;
		border-bottom: solid 1px #dddddd;
		
		img{
			width: 80px;
		}

		p{
			font-family: 'GmarketSansMedium';
			font-size: 18px;
			color: #555555;
		}

		.quantity-arrow-box{
			display: flex;
			flex-direction: column;
			gap: 3px;
			.quantity-arrow{
				cursor: pointer;
				width: 20px;
				height: 14px;
				background-color: #555;
				border-radius: 3px;
				color: white;
			}
		}

		button{
			width: 50px;
			height: 30px;
			border: none;
			border-radius: 5px;
			background-color: #A4BE7B;
			color: white;
			font-size: 12px;
			cursor: pointer;
			font-family: 'GmarketSansLight';
			font-weight: 900;
			font-size: 15px;
			letter-spacing: 1px;
		}
	}
}
`