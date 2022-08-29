import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    //命名空间,name值会作为action type的前缀自动追加
    name: 'users',
    // 初始化数据数值
    initialState: {
        user: []
    },
    //1.定义reducer更新状态函数 2.组件中dispatch使用的action函数
    //内置了immutable.js插件
    reducers: {
        set(state, action) {
            console.log(action)
            state.user=action.payload
        },
        // sub(state, action) {
        // console.log(state, action)
        // console.log(state)
        // console.log(action)
        //     state.count -= action.payload
        // },
        // subAsync(state, action) {
        //     state.count--
        // }

    }
})

//导出action函数
// export const { add, sub, subAsync } = user.actions
export const { set } = user.actions


//定义一个异步action
// export const del = (payload) => {
//     return async (dispatch, getState) => {
//         // dispatchEvent({ type: subAsync, payload })
//         console.log(dispatch, getState)
//         setTimeout(() => {
//             dispatch(subAsync())
//         }, 3000)
//     }
// }


//导出reducer 创建store
export default user.reducer