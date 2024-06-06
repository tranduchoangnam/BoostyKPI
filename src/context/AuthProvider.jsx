import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { projectsTableData, users } from "@/data";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
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
        let user = listUser.find(
            (item) =>
                item.email === data.email && item.password === data.password,
        );
        if (!user) {
            const registedUsers = JSON.parse(localStorage.getItem("users")) || [];
            user = registedUsers.find(
                (item) =>
                    item.email === data.email &&
                    item.password === data.password,
            );
        }
        if (user) {
            setUser(user);
            setToken(user.accessToken);
            localStorage.setItem("token", user.accessToken);
            navigate("/");
        } else {
            toast.error("Invalid email or password");
        }
    };

    const signUp = (data) => {
        const listUser = users;
        const user = listUser.find((item) => item.email === data.email);
        if (user) {
            toast.error("Email already exists");
            return;
        }
        const newUser = {
            ...data,
            id: uuidv4(),
            first_name: "",
            last_name: "",
            photo: `https://api.dicebear.com/8.x/pixel-art/svg?seed=${data.email}`,
            isNotified: true,
            kpis: [],
            phone: "",
            accessToken: `access-token-${uuidv4()}`,
        };
        setUser(newUser);
        setToken(newUser.accessToken);
        localStorage.setItem("token", newUser.accessToken);
        const registedUsers = JSON.parse(localStorage.getItem("users")) || [];
        const newListUser=[...registedUsers,newUser]
        localStorage.setItem(
            "users",
            JSON.stringify(newListUser),
        );
        toast.success("Account created successfully!", {
            autoClose: 500,
            onClose: () => navigate("/auth/sign-in"),
        });
    };
    const current_user = () => {
        try {
            const listUser = users;
            let user = listUser.find((item) => token === item.accessToken);
            if (!user) {
                const registedUsers = JSON.parse(localStorage.getItem("users")) || [];
                user = registedUsers.find(
                    (item) => token === item.accessToken,
                );
            }
            if (user) return user;
            return null;
        } catch (err) {
            return null;
        }
    };
    useEffect(() => {
        const user = current_user();
        setUser(user);
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
            value={{
                token,
                user,
                setUser,
                signUp,
                current_user,
                kpi,
                setKpi,
                loginAction,
                logOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};
