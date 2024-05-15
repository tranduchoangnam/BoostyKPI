import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import AuthProvider from "@/context/AuthProvider";
import { Home, ListKpi, DetailKpi, AddKpi, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Settings from "./pages/dashboard/settings";

function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Dashboard />}>
                        <Route index element={<Home />} />
                        <Route path="kpi">
                            <Route index element={<ListKpi />} />
                            <Route path=":id" element={<DetailKpi />} />
                        </Route>
                        <Route path="add-kpi" element={<AddKpi />} />
                        <Route path="calendar" element={<Notifications />} />
                        <Route path="settings" element={<Settings />} />
                    </Route>
                    <Route path="/auth" element={<Auth />}>
                        <Route path="sign-in" element={<SignIn />} />
                        <Route path="sign-up" element={<SignUp />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </LocalizationProvider>
    );
}

export default App;
