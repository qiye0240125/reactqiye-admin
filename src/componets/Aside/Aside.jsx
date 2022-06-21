import React, { useState } from "react";
import styles from './style.module.less'
import { useNavigate } from "react-router-dom";
import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd'

export function Aside(props) {
    const [openKeys, setOpenKeys] = useState(['sub1']);
    // const [AsideList,setasideList] = useState(props.AsideList)


    const navigate = useNavigate()
    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }

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
        navigate(`/${e.key}`)
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
                    width: 220,
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