import {configureStore} from '@reduxjs/toolkit'
import counter from './features/userSlice'


 const store = configureStore({
    reducer:{
        counter
    }
})

export default store