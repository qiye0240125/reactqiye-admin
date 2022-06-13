import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Login from "../views/Login/Login";


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

const  Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router