import React from "react";
// import styles from './style.modules.less'
import styles from "./style.module.less"
import { Breadcrumb, Table, Tag, Button, Modal, Space, Tree } from 'antd';

export default function Rights (){
    return(
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
                {/* <Button type="primary" >新增用户</Button> */}
            </div>
        </div>
    )
}