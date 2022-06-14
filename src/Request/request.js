import axios from 'axios'

const http = axios.create({
    baseURL:'http://106.52.108.142:8888/api/private/v1',
    timeout:2000
})

axios.interceptors.request.use(config => {
    if(window.sessionStorage.getItem('token')){
    config.headers.Authorization = window.sessionStorage.getItem('token')}
    return config
})

export default http