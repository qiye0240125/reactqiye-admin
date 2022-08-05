import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// export const context = createContext()

function AppProvider({ children }) {
    // console.log('我执行了,provider' )
    const Navigate = useNavigate();
    // const [isToken, setIsToken] = useState(false);
    const token = sessionStorage.getItem('token')
    useEffect(() => {
        // console.log('我执行了')
        if(!token){
            Navigate('/login');
        }
    }, [token,Navigate]);
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