import '../styles/Button.css';

type ButtonProps = {
    className?: string;
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}

export const ButtonLogin = ({ className, children, onClick, onKeyDown}: ButtonProps) => {
    return (
        <>
                <button className={`p-5 border-1 rounded-2xl bg-blue-600 h-5 w-max flex items-center hover:bg-blue-500 hover:border-black ${className}`}
                        onClick={onClick} onKeyDown={onKeyDown}>
                    {children}
                </button>
        </>
    )
}