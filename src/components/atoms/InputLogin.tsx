import '../styles/Login.css';
import React, {forwardRef} from 'react';

interface InputLoginProps extends React.InputHTMLAttributes<HTMLInputElement> {
    typeInput: string;
    preview: string;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    autoFocus?: boolean;
}

const InputLogin = forwardRef<HTMLInputElement, InputLoginProps>(({ typeInput, preview, className, onChange, onKeyDown, autoFocus}, ref) => {
    return (
        <>
            <input type={typeInput} placeholder={preview} className={`border-1 rounded-[15px] w-[100%] p-2 ${className}`}
                onChange={onChange} onKeyDown={onKeyDown} ref={ref} autoFocus={autoFocus}/>
        </>
    )
}
);

export default InputLogin;