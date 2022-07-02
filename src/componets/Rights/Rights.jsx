import React, { useState } from "react";
// import styles from './style.modules.less'
import styles from "./style.module.less"
import { Breadcrumb, Table, Tag, Button, Modal, Space, Tree } from 'antd';
import http from "../../Request/request";
import Drawer from "../Drawer/Drawer";

export default function Rights() {
    const [drawerOpen,setdrawerOpen] = useState(false)

    // const getrightsListData = async () => {
    //     const { data: res } = await http.get('/rights/list ')
    //     // setrightsListData(res.data)
    //     console.log(res)
    // }

    const openDrawer = () => {
        setdrawerOpen(!drawerOpen)
        // console.log(drawerOpen)
    }

    return (
        <div className={styles.rightsBox}>
            <div className={styles.headerTop}>
                <Breadcrumb>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <>权限管理</>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <>权限列表</>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Button type="primary" onClick={openDrawer}>弹出一个从右往左的抽屉组件</Button>
            </div>
            <Drawer
            drawerOpen={drawerOpen}
            openDrawer={openDrawer}
            >
            {/* 我是drawer组件111 */}
            <div>
                吃饭吗
            </div>
            <div>
                吃饭吗
            </div>
            <div>
                吃饭吗
            </div>
            </Drawer>
        </div>
    )
}