import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../appShell/loader/Loading';

function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/dashboard');
        }, 1500);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <Loading />
    );
}

export default Login; 