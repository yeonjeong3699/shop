import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { login, logout, userState } from "../api/firebase";
import UserData from "./UserData";
import { BsFillPencilFill } from "react-icons/bs"
import { RiShoppingCart2Fill } from "react-icons/ri"
// import { useAuthConfirm } from "../context/AuthConfirm";

export default function Nav() {
    // const [user, login, logout] = useAuthConfirm();

    const [user, setUser] = useState();

    useEffect(() => {
        userState((user) => {
            console.log(user);
            setUser(user); //userState로 전달받은 user의 정보값을 setUser에 전달
        })
    }, [])

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
            </nav>

            <UserWrap>
                {user && <UserData user={user} />}
                {user && <Link to='/cart' className="iconWrap"><RiShoppingCart2Fill className="cart" /></Link>}
                {user && user.isAdmin && <Link to='/items/new' className="iconWrap"><BsFillPencilFill className="write" /></Link>}
                {!user && <button onClick={useLogin} className="logBtn">LOGIN</button>}
                {user && <button onClick={useLogout} className="logBtn">LOGOUT</button>}
            </UserWrap>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 999;
    max-width: 1280px;
    margin: 0px auto;
    padding: 12px;
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.8);
    .title{
        font-size: 20px;
        color: #333333;
    }
    nav{
        display: flex;
        align-items: center;
        gap: 12px;
        margin-left: 30px;
        a{
            color: #333333;
        }
    }
`

const UserWrap = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    gap: 6px;
    .iconWrap{
        width: 30px;
        height: 30px;
        border-radius: 5px;
        background-color: #F78181;
        display: flex;
        justify-content: center;
        align-items: center;
        .write{
            font-size: 16px;
            color: white;
        }
        .cart{
            font-size: 20px;
            color: white;
        }
    }
    .logBtn{
        width: 65px;
        height: 30px;
        border: none;
        border-radius: 5px;
        background-color: #BDBDBD;
        color: white;
        font-size: 12px;
        cursor: pointer;
    }
`