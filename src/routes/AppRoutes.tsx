import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Config from "../pages/Config";
import MyState from "../pages/MyState";

function AppRoutes() {
    
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/config" element={<Config />} />
            <Route path="/state" element={<MyState />} />
        </Routes>
    );

}

export default AppRoutes;