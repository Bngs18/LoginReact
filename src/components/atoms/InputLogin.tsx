import '../styles/Login.css';

interface InputLoginProps {
    typeInput: string;
    preview: string;
    className?: string;
}

const InputLogin = ({typeInput, preview, className}: InputLoginProps) => {
    return(
        <>
            <input type={typeInput} placeholder={preview} className={`border-1 rounded-[15px] w-[100%] p-2 ${className}`}/>
        </>
    )
}

export default InputLogin;