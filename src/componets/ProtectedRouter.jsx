/* import React,{useContext} from "react";

import {context} from "./AppProvider";

import {useNavigate} from 'react-router-dom'

function ProtectedRouter ({children}){
    const Navigate = useNavigate()

    const { isToken, setIsToken} = useContext(context)
    if(isToken){
        return children
    }
    return Navigate('/login',{replace:true})
    return(
        children
    )
}
export default ProtectedRouter */