import React, { useState } from "react";
import http from "../../Request/request";
import styles from './style.module.less'
import { Button } from 'antd';
import 'antd/dist/antd.css';

export default function Login() {
    const [account, setAccount] = useState({
        username: 'admin',
        password: '123456'
    })
    // const [userlist,setUserList] = useState({})

    const getUserInfo = async () => {
        const { data: res } = await http.post('/login', account)
        if (res.meta.status !== 200) return
        console.log(res)
    }

    return (
        <div>
            <Button type="primary"  onClick={getUserInfo}>登录</Button>
            <div className={styles.Login}>
                我是登录啊啊啊组件
            </div>
        </div>
    )
}