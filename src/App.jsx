import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import AuthProvider from "@/context/AuthProvider";
import { Home, ListKpi, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import DetailKpi from "./pages/dashboard/kpi";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

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
                        <Route path="add-kpi" element={<Tables />} />
                        <Route path="calendar" element={<Notifications />} />
                        <Route path="settings" element={<Notifications />} />
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
