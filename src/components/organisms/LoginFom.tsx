import '../styles/Login.css';
import InputLogin from '../atoms/InputLogin';
import { ButtonLogin } from '../atoms/ButtonLogin';

const LoginForm = () => {

    return (
        <form className='bg-blue-950 opacity-45 rounded-xl h-[400px] w-[350px] shadow-fuchsia-950 border-black border-1 flex flex-col items-center p-10'>
            <div className=' flex justify-center p-5 my-[12px]'>
                <label className='text-white text-[22px] font-serif'>Login</label>
            </div>
            <div className=''>
                <InputLogin typeInput='text' preview='Username' className='my-[10px]'/>
                <InputLogin typeInput='password' preview='Password' />
            </div>
            <div className='flex items-start w-[100%]'><label className='text-blue-400 text-[15px] italic underline font-sans'>Forgot your password?</label></div>
            <div className='flex gap-2 my-3 items-start w-[100%]'>
                <ButtonLogin>Login</ButtonLogin>
                <ButtonLogin>Sign up</ButtonLogin>
            </div>
        </form >
    )
} 

export default LoginForm;