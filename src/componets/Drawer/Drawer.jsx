import React, { useEffect, useState, useRef } from "react";
import styles from './style.module.less'

export default function Drawer(props) {
    const [openDrawer, setOpenDrawer] = useState()
    const divRef = useRef(null)


    useEffect(() => {
        props.drawerOpen ? setOpenDrawer(true) : setOpenDrawer(false)
    }, [props.drawerOpen])

    const btn = () => {
        console.log(props)
        // setOpenDrawer(!openDrawer)
    }

    const closeMaskHndle = (e) => {
        if (e.target !== divRef.current)
            return
        props.openDrawer()
    }


    return (
        <div
            name='drawerBox'
            ref={divRef}
            className={`${styles.drawerBox}  ${openDrawer ? styles.isOpen : styles.isClose}`}
            onClick={closeMaskHndle}>
            <div className={styles.drawerBoxRight}>
                {props.children[0]}
            </div>
            <button onClick={btn}>aaaa</button>
        </div>
    )
}