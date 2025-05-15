import '../styles/Login.css';
import InputLogin from '../atoms/InputLogin';
import { ButtonLogin } from '../atoms/ButtonLogin';
import { useNavigate } from 'react-router-dom';
import data from '../../utils/data.json';
import { useState } from 'react';

const LoginForm = () => {
    const navigate = useNavigate();
    const users = Object.values(data.users)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const tryLogin = () => {
        const foundUser = users.find(
            (userRecord) => userRecord.user === username && userRecord.password === password
        );

        if(foundUser){
            navigate("/page")
        }
    }

    return (
        <>
        <head title='Login'></head>
        <form className='bg-blue-950 opacity-45 rounded-xl h-[400px] w-[350px] shadow-fuchsia-950 border-black border-1 flex flex-col items-center p-10'>
            <div className='flex justify-center p-5 my-[12px]'>
                <label className='text-white text-[22px] font-serif'>Login</label>
            </div>
            <div className=''>
                <InputLogin 
                    typeInput='text'
                    preview='Username'
                    className='my-[10px]'
                    onChange={(e) => setUsername(e.target.value)}/>
                <InputLogin
                    typeInput='password'
                    preview='Password'
                    onChange={(e) => setPassword(e.target.value)}/>
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