import { legacy_createStore as createStore } from 'redux';

//store



//action

const action1 = { type: 'add1' }
const action2 = { type: 'addN', num: 2 }
const action3 = { type: 'addN', num: 10 }

//reducer
const initState = 0
const reducer = (preState = initState, action) => {
    // if (action.type === 'add1') {
    //     return preState  + 1
    // }
    // return newState
    switch (action.type) {
        case 'add':
            return preState + 1
        case 'addN':
            return preState + action.num
        default:
            return preState
    }

}