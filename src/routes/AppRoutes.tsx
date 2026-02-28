import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Config from "../pages/Config";

function AppRoutes() {
    
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/config" element={<Config />} />
        </Routes>
    );

}

export default AppRoutes;