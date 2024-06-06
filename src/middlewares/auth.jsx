import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {useAuth} from "@/context/AuthProvider";
const AuthGuard = () => {
    const auth=useAuth();
    return auth.user ? <Outlet /> : <Navigate to="/landing-page" />;
}

export default AuthGuard
