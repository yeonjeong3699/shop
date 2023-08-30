import React, { createContext, useContext, useEffect, useState } from "react";
import { userState, login, logout } from "../api/firebase";

const AuthConfirm = createContext();

export function AuthContextProvider({children}) {
    // const [user, setUser] = useState();

    // useEffect(() => {
    //     userState((user) => {
    //         console.log(user);
    //         setUser(user); //userState로 전달받은 user의 정보값을 setUser에 전달
    //     })
    // }, [])

    // const useLogin = () => {
    //     login().then(setUser);
    // }
    // const useLogout = () => {
    //     logout().then(setUser);
    // }

    const [user, setUser] = useState();

    useEffect(()=>{
        userState((user)=>{
            setUser(user)
        })
    },[])

    return(
        <AuthConfirm.provider value={{user, login, logout}}>
            {children}
        </AuthConfirm.provider>
    )
}

export function useAuthConfirm(){
    return useContext(AuthConfirm)
}