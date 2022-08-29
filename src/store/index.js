import {configureStore} from '@reduxjs/toolkit'
import counter from './features/userSlice'
import users from './features/userAdd'


 const store = configureStore({
    reducer:{
        counter,
        users
    }
})

export default store