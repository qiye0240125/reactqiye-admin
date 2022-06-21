import React, { useEffect, useState } from "react";
import styles from './style.module.less'
import { info } from '../../utils/info'
import { Breadcrumb, Space, Table, Tag, Button, Switch, Modal, Input } from 'antd';
import http from '../../Request/request'

export default function Users() {
    const [userListdData, setUserListData] = useState([])
    const [adduserListdData, setaddUserListData] = useState([])
    const [deleteUserModal, setdeleteUserModal] = useState(false)
    const [addUserModal, setAddUserModal] = useState(false)
    const [usersdefaultRequest, setUsersdefaultRequest] = useState({
        query: '',
        pagenum: 1,
        pagesize: 99,
    })

    //获取用户列表
    const getUserListdData = async (params) => {
        const { data: res } = await http.get('/users', { params: params })
        if (res.meta.status !== 200) return info(res.meta.msg)
        setUserListData(res.data.users)
        // console.log(res)
    }
    //删除用户对话框
    const deleteUserDataModal = (id) => {
        setaddUserListData(id)
        setdeleteUserModal(true)
    }

    const deleteUserHandleOk = async () => {
        // console.log(adduserListdData)
        const {data:res} = await http.delete(`/users/${adduserListdData}`)
        if (res.meta.status !== 200) return info(res.meta.msg)
        getUserListdData(usersdefaultRequest)
        setaddUserListData([])
        setdeleteUserModal(false)
    }

    const deleteUserHandleCancel = () => {
        setdeleteUserModal(false)
    }

    //新增用户对话框
    const adduserModal = () => {
        setAddUserModal(true)

    }

    const addUserHandleOk = () => {
        // const {data:res} = await http.delete(`/user${id}`)
        // setAddUserModal(false)
        console.log(adduserListdData)
        addUserListdData()

    }

    const addUserHandleCancel = () => {
        setaddUserListData([])
        setAddUserModal(false)
    }

    //新增用户列表请求
    const addUserListdData = async () => {
        const { data: res } = await http.post('/users', adduserListdData)
        if (res.meta.status !== 201) return info(res.meta.msg)
        info(res.meta.msg)
        getUserListdData(usersdefaultRequest)
        setaddUserListData([])
        setAddUserModal(false)
        // console.log(res)
    }

    //对话框弹出后填入的改变
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setaddUserListData((adduserListdData) => ({ ...adduserListdData, [name]: value }));
    };

    useEffect(() => {
        getUserListdData(usersdefaultRequest)
    }, [usersdefaultRequest])

    const columns = [
        {
            title: '用户名',
            dataIndex: 'username',
            key: 'username',
            //   render: (text) => <a>{text}</a>,
        }, {
            title: '手机',
            dataIndex: 'mobile',
            key: 'mobile',
        }, {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
        }, {
            title: '管理员',
            dataIndex: 'role_name',
            key: 'role_name',
        }, {
            title: '用户状态',
            dataIndex: 'mg_state',
            key: 'mg_state',
            render: (_, record) => (
                <Space size="middle">
                    <Switch defaultChecked={record.mg_state}></Switch >
                </Space>
            ),
        }, {
            title: '操作',
            dataIndex: 'id',
            key: 'id',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary" >编辑</Button >
                    <Button type="primary" danger onClick={ () => {deleteUserDataModal(record.id)}}>删除</Button >
                </Space>
            ),
        },
    ];

    return (
        <div className={styles.userListBox}>
            <div className={styles.headerTop}>
                <Breadcrumb>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <>用户管理</>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <>用户列表</>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Button type="primary" onClick={adduserModal}>新增用户</Button>
            </div>
            <Modal title="删除用户"
                visible={deleteUserModal}
                onOk={deleteUserHandleOk}
                onCancel={deleteUserHandleCancel}
                cancelText="取消"
                okText="确认"
            >
                <span>是否删除该用户</span>
            </Modal>
            <Modal title="新增用户"
                visible={addUserModal}
                onOk={addUserHandleOk}
                onCancel={addUserHandleCancel}
                cancelText="取消"
                okText="确认"
            >
                <div className={styles.addUserInputBox}>
                    用户名称
                    <Input
                        name="username"
                        onInput={onChangeHandler}
                        value={adduserListdData.username}
                    >
                    </Input>
                </div>
                <div className={styles.addUserInputBox}>
                    密码
                    <Input
                        name="password"
                        onInput={onChangeHandler}
                        value={adduserListdData.password}
                    >
                    </Input>
                </div>
                <div className={styles.addUserInputBox}>
                    邮箱
                    <Input
                        name="email"
                        onInput={onChangeHandler}
                        value={adduserListdData.email}
                    >
                    </Input>
                </div>
                <div className={styles.addUserInputBox2}>
                    手机号
                    <Input
                        name="mobile"
                        onInput={onChangeHandler}
                        value={adduserListdData.mobile}
                    >
                    </Input>
                </div>

            </Modal>
            <Table
                style={{ marginTop: 20 }}
                columns={columns}
                rowKey={(record) => record.id}
                dataSource={userListdData}
            />
        </div>
    )
}