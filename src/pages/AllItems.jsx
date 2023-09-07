import React from "react";
import Products from "../components/Products";
import CategoryList from "../components/CategoryList";
import { styled } from "styled-components";

export default function AllItems() {
    return (
        <ItemContainer className="container">
            <CategoryList/>
            <Products/>
        </ItemContainer>
    )
}

const ItemContainer = styled.div`
    max-width: 1280px;
    margin: 0px auto;
`