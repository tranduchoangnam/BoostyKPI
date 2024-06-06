import React from 'react';
import { Navigate } from 'react-router-dom';
import {useAuth} from "@/context/AuthProvider";
const AuthGuard = ({children}) => {
    const auth=useAuth();
    return auth.user ? children : <Navigate to="/landing-page" />;
}

export default AuthGuard
