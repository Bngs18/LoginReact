import '../styles/Login.css';

interface InputLoginProps {
    typeInput: string;
    preview: string;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputLogin = ({typeInput, preview, className, onChange}: InputLoginProps) => {
    return(
        <>
            <input type={typeInput} placeholder={preview} className={`border-1 rounded-[15px] w-[100%] p-2 ${className}`}
            onChange={onChange}/>
        </>
    )
}

export default InputLogin;