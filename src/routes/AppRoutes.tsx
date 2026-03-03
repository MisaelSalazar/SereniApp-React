import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Config from "../pages/Config";
import MyState from "../pages/MyState";
import History from "../pages/History";
import User from "../pages/User";

function AppRoutes() {
    
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/config" element={<Config />} />
            <Route path="/state" element={<MyState />} />
            <Route path="/history" element={<History />} />
            <Route path="/user" element={<User />} />
        </Routes>
    );

}

export default AppRoutes;