import '../styles/Button.css';

type ButtonProps = {
    className?: string;
    children: React.ReactNode;
}

export const ButtonLogin = ({className, children}: ButtonProps) => {
    return(
        <>
            <button className={`p-5 border-1 rounded-2xl bg-blue-600 h-5 w-max flex items-center hover:bg-blue-500 hover:border-black ${className}`}>
                {children}
            </button>
        </>
    )
}