import { lazy } from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import Login from "../views/Login/Login";
// import ProtectedRouter from "../componets/ProtectedRouter";
// import Home from "../views/Home/Home";
const Home = lazy(() => import('../views/Home/Home'))
const Users = lazy(() => import('../componets/Users/Users'))
const Roles = lazy(() => import('../componets/Roles/Roles'))
const Rights = lazy(() => import('../componets/Rights/Rights'))
const Goods = lazy(() => import('../componets/goods/goods'))

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} >
                    <Route path="/users" element={<Users />}></Route>
                    <Route path="/roles" element={<Roles />}></Route>
                    <Route path="/rights" element={<Rights />}></Route>
                    <Route path="/goods" element={<Goods />}></Route>
                </ Route>
            </Routes>
        </>
    )
}

export default Router