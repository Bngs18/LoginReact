import type { ReactEventHandler } from 'react';
import '../styles/Button.css';
import { Link } from 'react-router-dom';

type ButtonProps = {
    className?: string;
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonLogin = ({ className, children, onClick }: ButtonProps) => {
    return (
        <>
                <button className={`p-5 border-1 rounded-2xl bg-blue-600 h-5 w-max flex items-center hover:bg-blue-500 hover:border-black ${className}`}
                        onClick={onClick}>
                    {children}
                </button>
        </>
    )
}