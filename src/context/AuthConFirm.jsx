import React, { createContext, useContext, useEffect, useState } from "react";
import { userState, login, logout } from "../api/firebase";


//인증관련 상태 생성
//AuthConfirm에 들어오는 새로운 인증 관련 Context생성
const AuthConfirm = createContext()

//인증상태 관리 기능 제공 영역
export function AuthContextProvider({ children }) {
    const [user, setUser] = useState();

    useEffect(() => {
        userState((user) => {
            setUser(user);
        })
    }, [])

    return (
        <AuthConfirm.Provider value={{user, uid:user && user.uid, login, logout}}>
            {children}
        </AuthConfirm.Provider>
    )
}

export function useAuthContext(){
    return useContext(AuthConfirm)
}