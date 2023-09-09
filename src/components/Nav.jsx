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


    //스크롤 이동 값 확인하기
    const [scroll, setScroll] = useState(0);

    const scrollMove = () => {
        setScroll(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollMove);
        // console.log(scroll);

        // return () => {
        //     window.removeEventListener('scroll', scrollMove);
        // }

        /*
        <removeEventListener 설명인데 무슨 상황을 말하는건지 모르겠음>
        지금 같이 스크롤을 사용하는 경우 처럼 한 번 실행하는 것이 아닌
        여러번 addEventListener를 사용할 때에는 removeEventListener를 꼭 해주세요! 
        그렇지 않으면 여러번 호출 되고, 메모리에 쓰레기가 차게 됩니다.
        */
    })
 
    return (
        <HeaderContainer className={scroll > 0 ? 'on' : ''}>
            <div className="inner">
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