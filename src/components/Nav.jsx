import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { login, logout, userState } from "../api/firebase";
import UserData from "./UserData";
import { BsFillPencilFill } from "react-icons/bs"
import { useAuthConfirm } from "../context/AuthConFirm";

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
                <Link to='/cart'>장바구니</Link>
            </nav>

            <UserWrap>
                {user && user.isAdmin && <Link to='/items/new'><BsFillPencilFill className="write" /></Link>}
                {user && <UserData user={user} />}
                {!user && <button onClick={useLogin} className="loginBtn">login</button>}
                {user && <button onClick={useLogout} className="logoutBtn">logout</button>}
            </UserWrap>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    padding: 12px;
    border-bottom: solid 1px #dddddd;
    display: flex;
    align-items: center;
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
    gap: 12px;
    a{
        .write{
            font-size: 20px;
            color: pink;
            display: flex;
        }
    }
`