import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { login, logout } from "../api/firebase";

export default function Nav() {
    const [user, setUser] = useState();
    const useLogin = () => {
        login().then(setUser);
    }
    const useLogout = () => {
        logout().then(setUser);
    }

    return (
        <HeaderContainer>
            <Link to='/'>
                <h1 className="title">title</h1>
            </Link>

            <nav>
                <Link to='/items'>All Items</Link>
                <Link to='/items/new'>New</Link>
                <Link to='/cart'>장바구니</Link>
            </nav>

            {!user && <button onClick={useLogin}>login</button>}
            {!user && <button onClick={useLogout}>logout</button>}
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    padding: 12px 0px;
    border-bottom: solid 1px #dddddd;
    display: flex;

    .title{
        font-size: 20px;
        
    }
`