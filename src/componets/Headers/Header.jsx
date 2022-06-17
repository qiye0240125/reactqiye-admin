import React, { useEffect, useState } from "react";
import styles from './style.module.less'
import { Button } from 'antd'
import { useNavigate } from "react-router-dom";

export function Header() {
    const navigate = useNavigate()
    const [accountName, setAccountName] = useState('')
    useEffect(() => {
        const acName = sessionStorage.getItem('userName')
        setAccountName(acName)
    }, [])

    const userOut = () => {
        sessionStorage.removeItem('token')
        setTimeout(()=>{
            navigate('/login')
        },500)
        
    }


    return (
        <div className={styles.headers}>
            <div className={styles.headersText}>Backstage management</div>
            <div className={styles.headersBtn}>{accountName} <Button onClick={userOut}>退出</Button></div>
        </div>
    )
}