import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// export const context = createContext()

function AppProvider({ children }) {
    const to = useNavigate();
    const [isToken, setIsToken] = useState(false);
    const token = sessionStorage.getItem('token')
    useEffect(() => {
        if(!token){
            to('/login');
        }
    }, [isToken]);
    return (
        // <context.Provider value={{ isToken, setIsToken }}>
        //     {children}
        // </context.Provider>
        <>
            {children}
        </>
    );
}
export default AppProvider