import React, { useEffect, useState } from "react";
import styles from './style.module.less'
import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd'

export function Aside(props) {
    const [openKeys, setOpenKeys] = useState(['sub1']);
    // const [AsideList,setasideList] = useState(props.AsideList)

    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }

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

    const icon = (n) => {
        let icon2
        switch (n) {
            case 125:
                icon2 = <MailOutlined />;
                break;
            case 103:
                icon2 = <AppstoreOutlined />;
                break;
            default: icon2 = <SettingOutlined />
        }
        return icon2
    }

    const items = props.AsideList.map((item) =>
        getItem(item.authName, item.id, icon(item.id), item.children.map((item2) =>
            getItem(item2.authName, item2.path, null, null)
        ))
    )



    const rootSubmenuKeys = props.AsideList.map((item) =>
        `${item.id}`
    );

    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    const onClick = (e) => {
        console.log(e)
    }


    const btn = () => {
        // console.log(props.AsideList)
        console.log(items, rootSubmenuKeys)
    }

    return (
        <div className={styles.asideList}>
            <Menu
            className={styles.Menu}
                style={{
                    width: 256,
                }}
                onClick={onClick}
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                mode="inline"
                items={items}
            />
            {/* <button onClick={btn}>按钮</button> */}
        </div >
    )
}