import '../styles/Login.css';
import InputLogin from '../atoms/InputLogin';
import { ButtonLogin } from '../atoms/ButtonLogin';
import { useNavigate } from 'react-router-dom';
import data from '../../utils/data.json';
import React, { useRef, useState } from 'react';

const LoginForm = () => {
    const navigate = useNavigate();
    const users = Object.values(data.users)
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const tryLogin = () => {
        const foundUser = users.find(
            (userRecord) => userRecord.user === username && userRecord.password === password
        );

        if (foundUser) {
            navigate('/page')
        }
    }

    const setData = () => {
        setUserName(userNameRef.current?.value || "");
        setPassword(passwordRef.current?.value || "");
    }

    const userNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.target === userNameRef.current && (e.key === "ArrowDown" || e.key === "Enter")) {
            e.preventDefault();
            passwordRef.current?.focus();
        }
        if (e.target === passwordRef.current && (e.key === "ArrowUp")) {
            userNameRef.current?.focus();
        }
        if (e.target === passwordRef.current && (e.key === "Enter")) {

            tryLogin();
        }
    }

    return (
        <>
            <head title='Login'></head>
            <form className='bg-blue-950 opacity-45 rounded-xl h-[400px] w-[350px] shadow-fuchsia-950 border-black border-1 flex flex-col items-center p-10'>
                <div className='flex justify-center p-5 my-[12px]'>
                    <label className='text-white text-[22px] font-serif'>Login</label>
                </div>
                <div>
                    <InputLogin
                        typeInput='text'
                        preview='Username'
                        className='my-[10px]'
                        onChange={setData}
                        onKeyDown={handleKey} autoFocus
                        ref={userNameRef} />
                    <InputLogin
                        typeInput='password'
                        preview='Password'
                        onKeyDown={handleKey}
                        onChange={setData}
                        ref={passwordRef} />
                </div>
                <div className='flex items-start w-[100%]'><label className='text-blue-400 text-[15px] italic underline font-sans'>Forgot your password?</label></div>
                <div className='flex gap-2 my-3 items-start w-[100%]'>
                    <ButtonLogin onClick={tryLogin}>Login</ButtonLogin>
                    <ButtonLogin>Sign up</ButtonLogin>
                </div>
            </form >
        </>
    )
}

export default LoginForm;