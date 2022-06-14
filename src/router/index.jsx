import { lazy } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Login from "../views/Login/Login";
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
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router