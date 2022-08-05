import React, { useEffect, useState } from 'react'
import styles from './index.module.less'

export default function Swipericon(props) {
    const {
        fieldNames = { title: 'Name', key: 'key', url: 'url' },
        swipericondata,
        handleClick
    } = props

    // const [faterData, setFaterData] = useState([])

    const handledata = () => {
        // console.log(props)
    }

    useEffect(() => {

    }, [])

    return (
        <div>
            <div
                className={styles.swiperIconBox}
            >
                {swipericondata.map(item => {
                    return (
                        <div
                            className={styles.swiperBox}
                            onClick={(e) => handleClick(item, e)}
                            key={item[fieldNames.key]}>
                            <div
                                className={styles.swiperIcon}
                            ><img src={item[fieldNames.url]} alt="" /></div>
                            <span>{item[fieldNames.title]}</span>
                        </div>
                    )
                })}
            </div>
            {/* <button onClick={handledata}>点击</button> */}
        </div>
    )
}