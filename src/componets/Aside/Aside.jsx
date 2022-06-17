import React from "react";
import styles from './style.module.less'
// import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
// import { Menu } from 'antd'

export function Aside(props) {



    // function getItem(label, key, icon, children, type) {
    //     return {
    //         key,
    //         icon,
    //         children,
    //         label,
    //         type,
    //     };
    // }

    // const items = [
    //     getItem('Navigation One', 'sub1', <MailOutlined />, [
    //         getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    //         getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
    //     ]),
    //     getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    //         getItem('Option 5', '5'),
    //         getItem('Option 6', '6'),
    //         getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    //     ]),
    //     getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    //         getItem('Option 9', '9'),
    //         getItem('Option 10', '10'),
    //         getItem('Option 11', '11'),
    //         getItem('Option 12', '12'),
    //     ]),
    // ];

    // const items = [
    //     { lable: '菜单项一', key: 'item-1' },
    //     { lable: '菜单项二', key: 'item-2' },
    //     {
    //         lable: '子菜单', key: 'submenu',
    //         children: [{ lable: '子菜单项', key: 'submenu-item-1' }]
    //     },
    // ]

    const onClick = (e) => {
        console.log('click ', e);
    };

    return (
        <div className={styles.asideList}>
            {/* <Menu
                onClick={onClick}
                style={{
                    width: 256,
                }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            /> */}
            {/* <Menu items={items} /> */}
            <ul>
                {(() => {
                    let li = []
                    for (let i = 0; i < 99; i++)
                        li.push(<li key={i}>{i}</li>)
                    return li
                })()}
            </ul>
        </div >
    )
}