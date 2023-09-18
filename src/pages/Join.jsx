import { async } from "@firebase/util";
import React, { useState } from "react";
import { checkEmail, joinEmail } from "../api/firebase";
import { useNavigate } from "react-router-dom";

export default function Join() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [psError, setPsError] = useState(''); //비밀번호 오류 감지
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate(); //useHistory는 하위 버전에서 사용하던 버전. 리액트5 버전에서는 사용 가능

    const signUpEvent = async (e) => {
        e.preventDefault();

        // const isEmail = await checkEmail(email);

        // if (isEmail) {
        //     setEmailError('이미 가입된 이메일 주소가 있습니다. 다른 이메일 주소를 사용해 주세요.')
        // }

        if (password.length < 6) {
            setPsError('비밀번호는 6글자 이상이여야 합니다.');
        }

        try {
            const user = await joinEmail(email, password);
            console.log(user);
            navigate('/')
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="container">
            <h2>JOIN</h2>

            <form onSubmit={signUpEvent}>

                <div>
                    <input type="email" placeholder="이메일을 입력하세요." value={email} onChange={(e) => setEmail(e.target.value)} />
                    {emailError && <span className="errorText">{emailError}</span>}
                </div>


                <div>
                    <input type="password" placeholder="비밀번호를 입력하세요." value={password} onChange={(e) => setPassword(e.target.value)} />
                    {psError && <span className="errorText">{psError}</span>}
                </div>

                <button type="submit">회원가입 하기</button>
            </form>
        </div>
    )
}