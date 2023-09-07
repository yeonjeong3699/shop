import React from "react";
import { styled } from "styled-components";

export default function UserData({user: {displayName, photoURL}}){
    return(
        <UserItem>
            <span className="hidden">{displayName}님</span>
            {/* <img src={photoURL} alt={displayName}/> */}
        </UserItem>
    )
}

const UserItem = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    span{
        font-size: 15px;
        @media screen and (max-width:768px){
            display: none;
        }
    }
    img{
        width: 30px;
        border-radius: 5px;
        /* &:after{
            content: "";
            display: block;
            width: 1px;
            height: 10px;
            background-color: black;
        } */
    }

`