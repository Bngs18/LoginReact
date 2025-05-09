import LoginForm from '../components/organisms/LoginFom';
import '../styles/Login.css';

const Login: React.FC = () => {

    return(
        <>
            <div className="bg-neutral-700 text-white size-max grid h-screen w-screen justify-items-center items-center">
                <LoginForm />
            </div>
        </>
    )
}

export default Login;