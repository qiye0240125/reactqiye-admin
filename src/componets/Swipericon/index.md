 代码演示
 默认为最多展示4个图标
 
import Swipericon from '../Swipericon/index'

const [swipericon, setSwipericon] = useState([
        { key: 101, Name: '商品管理',url:''' },
        { key: 102, Name: '商品吃货',url:''' },
        { key: 103, Name: '商品使用',url:'' },
        ])


const handleClick = (item, e) => {
        console.log(item, e)
}

 <Swipericon
    swipericondata={swipericon}
    fieldNames={{ title: 'authName', key: 'id', url: 'url' }}
    handleClick={handleClick}
></Swipericon>

swipericondata 绑定数据源
 
fieldNames	自定义节点 title、key、url 的字段	默认为 object { title: 'Name', key: 'key', url: 'url' }

handleClick	点击项目触发 function((item,e)=>{})