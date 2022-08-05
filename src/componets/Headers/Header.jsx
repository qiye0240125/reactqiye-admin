import React, { useEffect, useState } from "react";
import styles from './style.module.less'
import { Button, Popover } from 'antd'
import { useNavigate } from "react-router-dom";
import { SettingOutlined } from '@ant-design/icons';

export function Header() {
    const navigate = useNavigate()
    const [accountName, setAccountName] = useState('')
    useEffect(() => {
        const acName = sessionStorage.getItem('userName')
        setAccountName(acName)
    }, [])

    const userOut = () => {
        sessionStorage.removeItem('token')
        setTimeout(() => {
            navigate('/login')
        }, 500)

    }
    const text = '切换主题';
    const content = (
        <div>
            <div>我是白色</div>
            <div>我是黑色</div>
        </div>
    )

    const buttonWidth = 70;

    return (
        <div className={styles.headers}>
            <div className={styles.headersText}>Backstage management</div>
            <div
                className={styles.headersRightBox}
            >
                <Popover content={content} title="Title">
                    <Button type="primary">Hover me</Button>
                </Popover>
                <div
                    className={styles.headersRightIcon}
                ><SettingOutlined /></div>
                <div className={styles.headersBtn}>{accountName} <Button onClick={userOut}>退出</Button></div>
            </div>

        </div>
    )
}