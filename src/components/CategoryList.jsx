import React from "react";
import { useQuery } from "@tanstack/react-query"; //설치방법: yarn add @tanstack/react-query
import { getCategory } from "../api/firebase";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

export default function CategoryList() {
    const { data: categories } = useQuery(['categories'], getCategory) //useQuery: 데이터를 받아올 때 사용

    const setCategory = new Set(); //new Set: 특정한 값을 배열로 출력해주는 메서드. array, map 등과 달리 중복 요소를 구분한다.

    if(categories){
        categories.forEach((categoryObject)=>{
            setCategory.add(categoryObject.category); //add: 배열에 추가하는 메서드
        })
    }

    const setCategoryArr = [...setCategory];
    console.log(setCategoryArr);


    return (
        <CategoryItemList>
            {setCategoryArr.map((category, index)=>(
                <CategoryItem key={index}>
                    <Link to={`/items/${category}`}>
                        {category}
                    </Link>
                </CategoryItem>
            ))}
        </CategoryItemList>
    )
}

const CategoryItemList = styled.ul`
    display: flex;
    gap: 30px;
    padding: 24px;
`

const CategoryItem = styled.li`
    a{
        font-family: 'GmarketSansLight';
        font-weight: 900;
        font-size: 18px;
        color: #999;
        transition: 300ms;
        &:hover{
            color: #333333;
        }
    }
`