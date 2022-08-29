import React, { useEffect, useState, useRef } from "react";
import styles from './style.module.less'

export default function Goods() {
    const [root, setRoot] = useState('dark')

    const handleselect = () => {
        // console.log(document.documentElement.setAttribute('box'))
        root === 'dark' ? setRoot('light') : setRoot('dark')
    }
    return (
        <div className={styles.wrapper}>
            我是商品列表
            {/* <button onClick={() => handleselect()}>我是切换按钮</button> */}
            <button onClick={() => setRoot('light')}>我是切换红色按钮</button>
            <button onClick={() => setRoot('dark')}>我是切换黑色按钮</button>
            <button onClick={() => setRoot('green')}>我是切换绿色按钮</button>
            <div className={`${styles.box} ${styles[root]}`}>
                我是主题样式测试
            </div>
        </div>
    )
}