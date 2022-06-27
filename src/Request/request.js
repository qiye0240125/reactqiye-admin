import axios from 'axios'
// import { useNavigate } from "react-router-dom";


// const navigate = useNavigate()
const http = axios.create({
    baseURL:'http://106.52.108.142:8888/api/private/v1',
    timeout:2000
})

http.interceptors.request.use(config => {
    if(sessionStorage.getItem('token')){
    config.headers.Authorization = sessionStorage.getItem('token')}
    return config
})


http.interceptors.response.use(req=>{
     if(req.data.meta.status === 401 && req.data.meta.msg === '无效token')
     return sessionStorage.clear()
     return req
},
//  err=>{
//     return Promise.reject('我是错误信息',err)
// }
);

export default http