import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri"
import useCart from "../context/useCart";

export default function DetailPage() { //useLocation: 현재 url의 정보를 가져오는 훅
    const state = useLocation().state;
    const { id, image, title, description, price, option } = state;
   // console.log(state);

    const { addItemCart } = useCart();

    const [selected, setSelected] = useState(option && option[0]);
    const [success, setSuccess] = useState();

    const SelectOpt = (e) => setSelected(e.target.value);
    console.log(SelectOpt);

    const CartItem = (e) => {
        const product = { id, title, image, price, option: selected, description, quantity: 1 }; //quantity: 수량 체크
        addItemCart.mutate(product, { //mutate: 특정 변수의 결과값을 전달하는 함수. product의 값을 addItemCart에 전달
            onSuccess: () => {
                setSuccess('장바구니에 상품이 추가되었습니다.');
            }
        })
        //console.log(product)
    }



    return (
        <div className="container">
            <div className="detailPage">
                <div className="detailImg">
                    <img src={image} />
                </div>

                <div className="detailText">
                    <h2>{title}</h2>
                    <p className="description">{description}</p>

                    <div className="detail-opt">
                        <label className="lable-text" htmlFor="opt-select">옵션</label>
                        <select id="opt-select" onChange={SelectOpt} value={selected}>
                            {option && option.map((option, index) => (
                                <option key={index}>{option}</option>
                            ))}
                        </select>
                        <p className="price">{price.toLocaleString()}원</p>
                    </div>

                    <div className="btn-box">

                        <button className="buy-btn">구매하기</button>
                        <button className="cart-btn" onClick={CartItem}><RiShoppingCart2Fill /></button>
                    </div>
                    {success && <p className="alert-msg">{success}</p>}
                </div>
            </div>
        </div>
    )
}