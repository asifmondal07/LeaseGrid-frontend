import { useEffect } from 'react';
import { ThreeDot } from 'react-loading-indicators';
import { useNavigate } from 'react-router-dom';

function LogoutPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            localStorage.setItem('isAuthenticated', 'false');
            navigate('/login');
        }, 1500);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <ThreeDot variant="brick-stack" color="#32cd32" size="medium" text="" textColor="" />
        </div>
    );
}

export default LogoutPage; 