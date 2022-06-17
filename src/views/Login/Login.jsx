import React, { useState } from "react";
import http from "../../Request/request";
import styles from './style.module.less'
import { Button, message, Checkbox, Form, Input } from 'antd';
import 'antd/dist/antd.min.css';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [account, setAccount] = useState({
        username: 'admin',
        password: '123456'
    })
    // let bgbubblesList = []
    // for (let i = 0; i < 10; i++) {
    //     bgbubblesList.push(<li key={i}/>)
    // }

    const navigate = useNavigate()

    //发送登录请求
    const getUserInfo = async () => {
        const { data: res } = await http.post('/login', account)
        if (res.meta.status !== 200) 
        return info(res.meta.msg)
        info(res.meta.msg)
        sessionStorage.setItem('token', res.data.token)
        sessionStorage.setItem('userName', res.data.username)
        navigate('/')
    }

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setAccount((account) => ({ ...account, [name]: value }))
    }

    const onFinish = (values) => {
        // console.log('Success:', values);
        getUserInfo()
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const info = (msg) => {
        message.info(msg);
    };

    return (
        <div className={styles.backBox}>
            <ul className={styles.bgbubbles}>
                {/* {bgbubblesList} */}
                {
                    (() => {
                        var li = [];
                        for (let i = 0; i < 10; i++)
                            li.unshift(<li key={i}></li>);
                        return li;
                    })()
                }
            </ul>
            <div className={styles.loginBox}>
                <div
                    className={styles.loginBoxTxt}
                >帐号登录</div>
                <Form
                    name="basic"
                    // initialValues={{remember: true,}}
                    initialValues={account}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label=""
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入企业帐号',
                            },
                        ]}
                    >
                        <Input
                            placeholder="请输入企业帐号"
                            name="username"
                            onChange={onChangeHandler} />
                    </Form.Item>

                    <Form.Item
                        label=""
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入您的密码',
                            },
                        ]}
                    >
                        <Input.Password
                            placeholder="请输入密码"
                            name="password"
                            onChange={onChangeHandler}
                        />
                    </Form.Item>
                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 0,
                            span: 16,
                        }}
                    >
                        <Checkbox>记住我的帐号</Checkbox>
                    </Form.Item>

                    <Form.Item
                        className={styles.loginBtnBox}
                    >
                        <Button
                            className={styles.loginBtn}
                            type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div >
    )
}