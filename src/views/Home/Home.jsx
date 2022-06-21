import React, { useEffect, useState,Suspense } from "react";
import { Header } from "../../componets/Headers/Header";
import { Aside } from "../../componets/Aside/Aside";
import http from '../../Request/request'
// import { message } from "antd";
import { Outlet } from "react-router-dom";
import styles from './style.module.less'

export default function Home() {
    const [AsideList, setAsideList] = useState([])

    //获取侧边栏列表
    const getAsideList = async () => {
        const { data: res } = await http.get('/menus')
        // console.log(res)
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
                <Suspense className={styles.contentRight}>
                    <Outlet></Outlet>
                </Suspense>
            </div>
        </div>
    )
}