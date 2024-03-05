import Layout1 from "@/layouts/Layout1";
import { Navigate, Route, Routes } from "react-router-dom"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout1>Home Page</Layout1>} />
            <Route path="/user-profile" element={<span>User Profile</span>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
};

export default AppRoutes;