import React from "react";
import { useNavigate } from "react-router-dom";

export default function DetailPageEvent({ product }) {
    const setPrice = product.price.toLocaleString(); //toLocaleString: 숫자, 날짜에서 자동으로 콤마를 찍어주는 메서드
    const navigate = useNavigate() //페이지와 정보 이동
    const detail = () => {
        navigate(`/items/detail/${product.id}`, {
            state: {
                id: product.id,
                image: product.image,
                title: product.title,
                price: product.price,
                option: product.option,
                description: product.description
            }
        })
    }

    return (
        <li onClick={detail}>
            <div className="imgBox"><img src={product.image} alt={product.title} /></div>
            <div className="textWrap">
                <h3 className="itemTitle">{product.title}</h3>
                <div className="itemFlex">
                    <p className="price">{setPrice}원</p>
                    <p className="option">{product.option.join(', ')}</p> {/* join: 배열의 모든 요소를 연결해 하나의 문자열로 만듬 */}
                </div>
            </div>
        </li>
    )
}