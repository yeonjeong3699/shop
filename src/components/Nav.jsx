import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { login, logout, userState } from "../api/firebase";
import UserData from "./UserData";
import { BsFillPencilFill } from "react-icons/bs"
import { RiShoppingCart2Fill } from "react-icons/ri"
import { BiSearch } from "react-icons/bi"
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


    //스크롤 이동 값 확인하기
    const [scroll, setScroll] = useState(0);

    const scrollMove = () => {
        setScroll(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollMove);
    })

    return (
        <HeaderContainer className={scroll > 0 ? 'on' : ''}>
            <div className="inner">
                <Link to='/'>
                    <h1 className="title">견생역전</h1>
                    {/* <img src={`${process.env.PUBLIC_URL}/img/logo.jpg`} /> */}
                    {/* src에 있는 이미지 가져오는 방법 */}
                </Link>

                <nav>
                    <Link to='/items'>전체상품</Link>
                    <Link to='/items'>베스트</Link>
                    <Link to='/items'>신상품</Link>
                    <Link to='/items'>이벤트</Link>
                </nav>

                <UserWrap>
                    {user && <Link to='/cart' className="iconWrap"><RiShoppingCart2Fill className="cart" /></Link>}
                    <Link to='/search' className="iconWrap"><BiSearch className="search" /></Link>
                    {user && user.isAdmin && <Link to='/items/new' className="iconWrap"><BsFillPencilFill className="write" /></Link>}

                    {user ? (
                        <>
                            {user && <UserData user={user} />}
                            <button onClick={useLogout} className="logBtn">LOGOUT</button>
                        </>
                    ) : (
                        <>
                            <Link to='/login'>
                                <button className="logBtn">LOGIN</button>
                            </Link>
                        </>
                    )}

                    {/*
                    로그인 구버전
                    {!user && <button onClick={useLogin} className="logBtn">LOGIN</button>}
                    {user && <button onClick={useLogout} className="logBtn">LOGOUT</button>}
                    */}
                </UserWrap>
            </div>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    .inner{
        max-width: 1280px;
        display: flex;
        align-items: center;
        margin: 0px auto;
        
        .title{
            font-family: 'TTTogether';
            font-weight: 100;
            font-size: 40px;
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
        .search{
            font-size: 22px;
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