import React, { useEffect, useState } from "react";
import styles from './style.module.less'
import http from "../../Request/request";
import { Breadcrumb, Table, Tag, Button, Modal, Space, Tree } from 'antd';
import { info } from '../../utils/info'

export default function Roles() {
    //用户权限列表
    const [rolesListData, setRolesListData] = useState([])
    //权限
    const [rightsListData, setrightsListData] = useState([])
    //获取到的个人用户权限选中
    const [autocheckedKeys, setcheckedKeys] = useState([])
    //树状图扩展keys
    // const [expandedKeys, setExpandedKeys] = useState([])
    //添加用户
    const [addrolesListData, setaddRolesListData] = useState([])
    // 删除对话框
    const [deleteRolesModal, setdeleteRolesModal] = useState(false)
    // 设置对话框
    const [setUserRolesModal, setsetUserRolesModal] = useState(false)

    const getRolesListData = async () => {
        const { data: res } = await http.get('/roles')
        setRolesListData(res.data)
        // console.log(res)
    }
    const getrightsListData = async () => {
        const { data: res } = await http.get('/rights/tree ')
        setrightsListData(res.data)
        console.log(res)
    }

    const filterdata = (data, arr) => {
        if (!data.children) {
            return arr.push(data.id)
        }
        data.children.forEach(item => {
            // console.log('执行了递归')
            filterdata(item, arr)
        });
    }

    const filterUserRoles = (data) => {
        let arr = []
        filterdata(data, arr)
        return arr
    }


    //控制分配权限
    const setUserRolesModel = (data) => {
        //console.log(data)
        setcheckedKeys(filterUserRoles(data))
        // setExpandedKeys(filterUserRoleschildren(data))
        setsetUserRolesModal(true)
    }

    const setUserRolesHandleOk = () => {
        console.log(autocheckedKeys)
        setcheckedKeys([])
        // setsetUserRolesModal(false)
    }
    const setUserRolesHandleCancel = () => {
        // autocheckedKeys([])
        setcheckedKeys([])
        setsetUserRolesModal(false)
    }

    const treeOnSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    }

    const treeOnCheck = (checkedKeys, e) => {
        // console.log(checkedKeys, e)
        if (autocheckedKeys.indexOf(e.node.id) === -1) {
            console.log(e.node.id)
            setcheckedKeys([...autocheckedKeys, e.node.id])
        } else {
            const arr = [...autocheckedKeys]
            arr.splice(arr.indexOf(e.node.id), 1)
            setcheckedKeys(arr)
        }
        // console.log(e.node.id)
    }


    //控制删除权限角色
    const deleteUserDataModal = (id) => {
        setaddRolesListData(id)
        setdeleteRolesModal(true)
    }

    const deleteRolesHandleOk = () => {
        deleterolesDataModal()
        setaddRolesListData([])

    }
    const deleteRolesHandleCancel = () => {
        setaddRolesListData([])
        setdeleteRolesModal(false)
    }

    //删除请求
    const deleterolesDataModal = async () => {
        const { data: res } = await http.delete(`roles/${addrolesListData}`)
        if (res.meta.status !== 200) return info(res.meta.msg)
        getRolesListData()
        setdeleteRolesModal(false)
    }

    //表格展开显示内容
    const expandedRowRender = (text, record, indent, expanded) => (
        text.children.map(item => (
            <div
                key={item.id}
                className={styles.TableTagone}
            >
                <div>
                    <Tag
                        color="blue">
                        {item.authName}
                    </Tag >

                </div>
                <div
                    className={styles.TableTagTwo}
                >
                    {item.children.map((item) => (

                        <div
                            className={styles.TableTagtwo}
                            key={item.id}>
                            <div>
                                <Tag
                                    color="green" >
                                    {item.authName}
                                </Tag >

                            </div>
                            <div className={styles.TableTagTree}>
                                {item.children.map((item) => (
                                    <div
                                        className={styles.TableTagtree}
                                        key={item.id}>
                                        <Tag
                                            color="orange">
                                            {item.authName}
                                        </Tag >
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ))
    )

    // 表格内容
    const columns = [
        // Table.EXPAND_COLUMN,

        {
            title: '序号',
            render: (text, record, index) => `${index + 1}`
        },
        {
            title: '角色名称',
            dataIndex: 'roleName',
            key: 'roleName',
        },
        {
            title: '角色描述',
            dataIndex: 'roleDesc',
            key: 'roleDesc',
        },
        {
            title: '操作',
            dataIndex: '',
            key: '',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary" onClick={() => { setUserRolesModel(record) }}>编辑</Button >
                    <Button type="primary" danger onClick={() => { deleteUserDataModal(record.id) }}>删除</Button >
                </Space>
            ),
        },
    ];

    const add = () => {
        console.log(rightsListData)
    }


    useEffect(() => {
        getrightsListData()
        getRolesListData()
    }, [])

    return (
        <div className={styles.rolesListBox}>
            <Modal title="分配权限"
                visible={setUserRolesModal}
                onOk={setUserRolesHandleOk}
                onCancel={setUserRolesHandleCancel}
                cancelText="取消"
                okText="确认"
            >
                <Tree
                    // expandedKeys={expandedKeys}
                    checkable
                    defaultExpandAll
                    // autoExpandParent={autoExpandParent}
                    treeData={rightsListData}
                    fieldNames={{ title: 'authName', key: 'id', children: 'children' }}
                    checkedKeys={autocheckedKeys}
                    // defaultCheckedKeys={autocheckedKeys}
                    onCheck={treeOnCheck}
                    onSelect={treeOnSelect}
                >

                </Tree>

            </Modal>
            <Modal title="删除用户"
                visible={deleteRolesModal}
                onOk={deleteRolesHandleOk}
                onCancel={deleteRolesHandleCancel}
                cancelText="取消"
                okText="确认"
            >
                <span>是否删除该用户</span>
            </Modal>
            <div className={styles.headerTop}>
                <Breadcrumb>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <>权限管理</>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <>角色列表</>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Button type="primary" onClick={add}>新增用户</Button>
            </div>
            <Table
                columns={columns}
                rowKey={(record) => record.id}
                expandable={{
                    indentSize: 30,
                    rowExpandable: record => record.children.length !== 0,
                    childrenColumnName: (record) => record.children,
                    expandedRowRender,
                }}
                dataSource={rolesListData}
            />

        </div>
    )
}