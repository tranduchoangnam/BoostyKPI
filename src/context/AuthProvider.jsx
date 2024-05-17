import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "@/configs/axiosInstance";
import { getUser } from "@/utils/api/user";
import { getToken } from "@/utils/api/refresh_token";
import { projectsTableData, users } from "@/data";
import {toast} from "react-toastify";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [kpi, setKpi] = useState([]);
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const navigate = useNavigate();
    // const loginAction = async (data) => {
    //     try {
    //         const tokenResponse = await axiosInstance.post("auth/login", data);
    //         setToken(tokenResponse.data.access_token);
    //         console.log(
    //             tokenResponse.data.access_token,
    //             tokenResponse.data.refresh_token,
    //         );
    //         localStorage.setItem("refresh", tokenResponse.data.refresh_token);
    //         navigate("/");
    //     } catch (err) {
    //         console.log("error");
    //     }
    // };

    const logOut = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("token");
        localStorage.removeItem("refresh");
        navigate("/auth/sign-in");
    };
    // useEffect(() => {
    //     try{
    //         getUser({ token }).then((res) => setUser(res));
    //     }catch(err){
    //         const refresh_token = localStorage.getItem("refresh");
    //         getToken({ token: refresh_token }).then((res) => {
    //             setToken(res.data.access_token);
    //         });
    //         setUser(null);
    //     }
    //     localStorage.setItem("token", token);
    // }, [token]);

    const loginAction = async (data) => {
        const listUser = users;
        const user = listUser.find(
            (item) =>
                item.email === data.email && item.password === data.password,
        );
        if (user) {
            setUser(user);
            setToken(user.accessToken);
            localStorage.setItem("token", user.accessToken);
            navigate("/");
        } else {
            toast.error("Invalid email or password");
        }
    };

    useEffect(() => {
        const listUser = users;
        const user = listUser.find((item) => token === item.accessToken);
        if (user) {
            setUser(user);
        } else {
            setUser(null);
        }
    }, [token]);
    useEffect(() => {
        if (user) {
            setKpi(
                projectsTableData.filter((item) => user.kpis.includes(item.id)),
            );
        }
    }, [user]);
    return (
        <AuthContext.Provider
            value={{ token, user, kpi, setKpi, loginAction, logOut }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};
