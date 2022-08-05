// import styles from './style.modules.less'
import styles from "./style.module.less"
import { Breadcrumb, Table, Tag, Button, Modal, Space, Tree, Popover } from 'antd';
import React, { useState } from "react";
import http from "../../Request/request";
import Drawer from "../Drawer/Drawer";
import { useDispatch, useSelector } from 'react-redux'
import { add, sub, del } from '../../store/features/userSlice'
// import Swipericon from '../Swipericon/index'

export default function Rights() {
    const [drawerOpen, setdrawerOpen] = useState(false)
    const [number, setNumber] = useState(10086)
    const [swipericon, setSwipericon] = useState([
        { key: 101, Name: '商品管理', url: 'https://appointment-1311759840.cos.ap-beijing.myqcloud.com/appointment/%E7%BB%BC%E5%90%88%E6%B5%8B%E8%AF%84.png' },
        { key: 102, Name: '商品吃货', url: 'https://appointment-1311759840.cos.ap-beijing.myqcloud.com/appointment/%E7%BB%BC%E5%90%88%E6%B5%8B%E8%AF%84.png' },
        { key: 103, Name: '商品使用', url: 'https://appointment-1311759840.cos.ap-beijing.myqcloud.com/appointment/%E7%BB%BC%E5%90%88%E6%B5%8B%E8%AF%84.png' },
        { key: 105, Name: '商品食物', url: 'https://appointment-1311759840.cos.ap-beijing.myqcloud.com/appointment/%E7%BB%BC%E5%90%88%E6%B5%8B%E8%AF%84.png' },
        { key: 106, Name: '商品食物', url: 'https://appointment-1311759840.cos.ap-beijing.myqcloud.com/appointment/%E7%BB%BC%E5%90%88%E6%B5%8B%E8%AF%84.png' },
        { key: 107, Name: '商品食物', url: 'https://appointment-1311759840.cos.ap-beijing.myqcloud.com/appointment/%E7%BB%BC%E5%90%88%E6%B5%8B%E8%AF%84.png' },
        { key: 108, Name: '商品食物', url: 'https://appointment-1311759840.cos.ap-beijing.myqcloud.com/appointment/%E7%BB%BC%E5%90%88%E6%B5%8B%E8%AF%84.png' }])

    // const getrightsListData = async () => {
    //     const { data: res } = await http.get('/rights/list ')
    //     // setrightsListData(res.data)
    //     console.log(res)
    // }

    const dispatch = useDispatch()
    const { count } = useSelector(state => state.counter)

    const content = (
        <div>
            <p>Content</p>
            <p>Content</p>
        </div>
    );

    const openDrawer = () => {
        setdrawerOpen(!drawerOpen)
        // console.log(drawerOpen)
    }

    const handleClick = (item, e) => {
        console.log(item, e)
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
            <Popover placement="topLeft" trigger="click" title="Title" content={content}>
                <Button>Align edge / 边缘对齐</Button>
            </Popover>
            {<Drawer
                drawerOpen={drawerOpen}
                openDrawer={openDrawer}
            >
                <div>
                    吃饭吗
                </div>
                <div>
                    吃饭吗
                </div>
                <div>
                    吃饭吗
                </div>
            </Drawer>}
            <div>{count}</div>
            <Button onClick={() => { dispatch(add(number)) }}>我是添加redux函数按钮</Button>
            <Button onClick={() => { dispatch(sub(number)) }}>我是减少redux函数按钮</Button>
            <Button onClick={() => { dispatch(del()) }}>我是异步定时器减少redux函数按钮</Button>
            {/* {swipericon.map((item) => {
                return (
                    <div>{item.Name}</div>
                )
            })} */}
        </div>
    )
}