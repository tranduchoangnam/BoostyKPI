import React from 'react';
import { Navigate } from 'react-router-dom';
import {useAuth} from "@/context/AuthProvider";
const AuthGuard = ({children}) => {
    const auth=useAuth();
    const current_user=auth.current_user();
    return current_user ? children : <Navigate to="/landing-page" />;
}

export default AuthGuard
