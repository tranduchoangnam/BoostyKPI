import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "@/configs/axiosInstance";
import { getUser } from "@/utils/api/user";
import { getToken } from "@/utils/api/refresh_token";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const navigate = useNavigate();
    const loginAction = async (data) => {
        try {
            const tokenResponse = await axiosInstance.post("auth/login", data);
            setToken(tokenResponse.data.access_token);
            console.log(
                tokenResponse.data.access_token,
                tokenResponse.data.refresh_token,
            );
            localStorage.setItem("refresh", tokenResponse.data.refresh_token);
            navigate("/");
        } catch (err) {
            console.log("error");
        }
    };

    const logOut = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("token");
        localStorage.removeItem("refresh");
        navigate("/auth/sign-in");
    };
    useEffect(() => {
        try{
            getUser({ token }).then((res) => setUser(res));
        }catch(err){
            const refresh_token = localStorage.getItem("refresh");
            getToken({ token: refresh_token }).then((res) => {
                setToken(res.data.access_token);
            });
            setUser(null);
        }
        localStorage.setItem("token", token);
    }, [token]);
    return (
        <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};
