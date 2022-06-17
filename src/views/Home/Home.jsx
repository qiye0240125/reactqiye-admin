import React, { useEffect, useState } from "react";
import { Header } from "../../componets/Headers/Header";
import { Aside } from "../../componets/Aside/Aside";
import http from '../../Request/request'
// import { message } from "antd";
import { Outlet } from "react-router-dom";
import styles from './style.module.less'

export default function Home() {
    const [AsideList, setAsideList] = useState([])

    const getAsideList = async () => {
        const { data: res } = await http.get('/menus')
        console.log(res)
        setAsideList(res.data)
        if (res.meta.status !== 200) return

    }

    useEffect(() => {
        getAsideList()
    }, [])

    return (
        <div className={styles.root}>
            <Header ></Header>
            <div className={styles.content}>
                <Aside 
                className={styles.contentLeft}
                AsideList={AsideList}
                >
                </Aside>
                {/* <Content className={styles.contentRight}> */}
                <div className={styles.contentRight}>
                    <Outlet></Outlet>
                </div>
                {/* </Content> */}
            </div>
        </div>
    )
}