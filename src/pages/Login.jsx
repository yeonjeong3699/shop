import { async } from "@firebase/util";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login, loginEmail } from "../api/firebase";

export default function Login() {
    const [email, setEmail] = useState(''); //로그인 아이디 변경 값 저장
    const [password, setPassword] = useState(''); //로그인 비밀번호 변경 값 저장
    const [loginError, setLoginError] = useState('');

    const navigate = useNavigate();

    const googleLogin = async () => {
        const user = await login();
        navigate('/')
    }

    const loginEvent = async (e) => {
        e.preventDefault();

        try {
            const user = await loginEmail(email, password);
            if (user) {
                navigate('/')
            } else {
                setLoginError('로그인에 실패하였습니다.');
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="container">
            <h2>LOGIN</h2>

            <form onSubmit={loginEvent}>
                <input type="email" placeholder="이메일을 입력하세요." value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="비밀번호를 입력하세요." value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">로그인</button>
                {loginError && <span>{loginError}</span>}
            </form>

            <Link to='/join'>회원가입</Link>

            <button onClick={googleLogin}>구글 로그인</button>
        </div>
    )
}