import { Navigate, Outlet } from 'react-router-dom'; 
import { useEffect } from 'react';
import useHandleUserHook from '../../Hooks/userHook';

const PrivateRoute = () => {
    const isTokenValid = true
    const token = localStorage.getItem("KOSMO_client_token")
    const {verifyTocken} = useHandleUserHook()
    useEffect(()=>{
        verifyTocken(token)
    },[token]) 

    return token
        ? (
            <Outlet />
        )
        : <Navigate to="/signIn" />;

};

export default PrivateRoute;