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
                <h1 className="title">견생역전</h1>
            </Link>

            <nav>
                <Link to='/items'>전체상품</Link>
                <Link to='/items'>베스트</Link>
                <Link to='/items'>신상품</Link>
                <Link to='/items'>이벤트</Link>
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
        font-family: 'TTTogether';
        font-weight: 100;
        font-size: 45px;
        color: #285430;
    }
    nav{
        display: flex;
        align-items: center;
        gap: 24px;
        margin-left: 50px;
        a{
            font-family: 'GmarketSansMedium';
            font-size: 22px;
            color: #555;
            letter-spacing: -0.5px;
            transition: 300ms;
            &:hover{
                color: #AACB73;
            }
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
        background-color: #A4BE7B;
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