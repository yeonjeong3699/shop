import React from "react";

export default function ProductItem({ product: { id, image, category, title, price, option, description } }) {
    const setPrice = price.toLocaleString(); //toLocaleString: 숫자, 날짜에서 자동으로 콤마를 찍어주는 메서드

    return (
        <li>
            <img src={image} alt={title} />
            <div className="textWrap">
                <h3 className="itemTitle">{title}</h3>
                <div className="itemFlex">
                    <p className="price">{setPrice}원</p>
                    <p className="option">{option.join(', ')}</p> {/* join: 배열의 모든 요소를 연결해 하나의 문자열로 만듬 */}
                </div>
            </div>
        </li>
    )
}