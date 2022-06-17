import { lazy } from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import Login from "../views/Login/Login";
// import ProtectedRouter from "../componets/ProtectedRouter";
// import Home from "../views/Home/Home";
const Home = lazy(() => import('../views/Home/Home'))


// export default function Router() {
//     return (
//         <div>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/" element={<Login />} />
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     )
// }

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    )
}

export default Router