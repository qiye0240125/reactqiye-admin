// import styles from './style.modules.less'
import styles from "./style.module.less"
// import { Breadcrumb, Table, Tag, Button, Modal, Space, Tree, Popover } from 'antd';
import { Breadcrumb, Button, Popover } from 'antd';
import React, { useState, useRef, useEffect } from "react";
import http from "../../Request/request";
import Drawer from "../Drawer/Drawer";
import { useDispatch, useSelector } from 'react-redux'
import { add, sub, del } from '../../store/features/userSlice'
import { set } from '../../store/features/userAdd'
// import Swipericon from '../Swipericon/index'

export default function Rights() {
    const [userListdData, setUserListData] = useState([])
    const [drawerOpen, setdrawerOpen] = useState(false)
    const [imgList, setImgList] = useState([])
    const [proMise, setPromise] = useState([])
    const [number, setNumber] = useState(10086)
    const [usersdefaultRequest, setUsersdefaultRequest] = useState({
        query: '',
        pagenum: 1,
        pagesize: 99,
    })
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
    const upLoadImgList = useRef()
    const upVideo = useRef()

    const dispatch = useDispatch()
    const { count } = useSelector(state => state.counter)
    const { user } = useSelector(state => state.users)


    const openDrawer = () => {
        setdrawerOpen(!drawerOpen)
        // console.log(drawerOpen)
    }

    const handleClick = (item, e) => {
        console.log(item, e)
    }

    const handleOnChange = (e) => {
        // console.log(e)
        let fileslength = e.target.files
        // console.log(fileslength[0])
        setImgList(window.URL.createObjectURL(fileslength[0]))
        // console.log(upLoadImgList.current.value)
        // upLoadImgList.current.value = ''
        let formData = new FormData()
        // // upFile就是后台接收的key
        formData.append('file', fileslength[0], fileslength[0].name)
        // console.log(formData.getAll('upFile'))
        upLoadImage(formData)
    }

    //上传图片请求
    const upLoadImage = async (file) => {
        const { data: res } = await http.post(`upload`, file)
        if (res.meta.status !== 200) return console.log(res.meta.msg)
        console.log(res)
        console.log('上传成功啦')
    }

    //获取用户列表
    const getUserListdData = async (params) => {
        const { data: res } = await http.get('/users', { params: params })
        if (res.meta.status !== 200) return console.log(res.meta.msg)
        setUserListData(res.data.users)
        dispatch(set(res.data.users))
        // console.log(res)
    }

    // useEffect(()=>{
    //     getUserListdData(usersdefaultRequest)
    // },[usersdefaultRequest])

    const getUserList = () => {
        getUserListdData(usersdefaultRequest)
    }

    useEffect(() => {
        console.log(userListdData)
    }, [userListdData])

    useEffect(() => {
        console.log(upVideo)
        console.log(URL.createObjectURL)
    }, [])


    // const promise99 = () => {
    //     const promise1 = new Promise((resolve, reject) => {
    //         const { data: res } = http.get('/users/509')
    // return res
    // if (res.meta.status !== 200) return console.log(res.meta.msg)
    // console.log(res)
    //     }.then((res) =>return res))
    //     return promise1
    // }

    const promise1 = http.get('/users/509')
    const promise2 = http.get('/users/50999')
    const promise3 = http.get('/users/509')

    const handlePromise = async () => {
        let proMise2 = []
        const res = await Promise.all([promise1, promise2, promise3])
        res.forEach((item) => {
            proMise2.push(item.data)
            // console.log(item.data)
        })
        // console.log(proMise2)
        setPromise(proMise2)
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
                <Button onClick={() => handlePromise()}>我是测试promise按钮</Button>
            </div>

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
            <Button onClick={() => getUserList()}>我是请求用户列表</Button>

            <div>
                我是上传组件
                <div className={styles.inputBox}>
                    <input
                        ref={upLoadImgList}
                        multiple
                        className={styles.inputBtn}
                        onChange={(e) => handleOnChange(e)}
                        type="file" accept=".jpg" />
                </div>
            </div>
            <div>
                <img
                    className={styles.previewBox}
                    src={imgList} alt="" />
            </div>
            {proMise.map((item, i) => {
                return (
                    <div key={i}>
                        {item.data ? item.data.username : <>我是错误</>}
                    </div>
                )
            })}
            <div className={styles.videoBox}>
                <video
                    className={styles.video}
                    // autoPlay
                    // muted
                    controls
                    ref={upVideo}
                    src="https://appointment-1311759840.cos.ap-beijing.myqcloud.com/appointment/v0d00fg10000c74400jc77uasaummthg.MP4"
                // src="https://appointment-1311759840.cos.ap-beijing.myqcloud.com/appointment/v0d00fg10000c74400jc77uasaummthg.MP4"
                // style="position: absolute; top: 0px; left: 0px; z-index: 1; width: 100%; height: 100%; overflow: hidden;"
                >
                </video>
            </div>
            {/* {swipericon.map((item) => {
                return (
                    <div>{item.Name}</div>
                )
            })} */}
        </div>
    )
}