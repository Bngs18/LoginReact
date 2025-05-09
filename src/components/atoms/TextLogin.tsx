import '../styles/Login.css';

type TextLoginProps = {
    children: React.ReactNode;
}

const TextLogin: React.FC<TextLoginProps> = ({children}) => {
    return(
        <label className='text-white font-serif'>
            {children}
        </label>
    )
}

export default TextLogin;