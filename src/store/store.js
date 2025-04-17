import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import cakeReducer from '../features/cake/cakeSlice'

const store = configureStore({
    reducer:{
    counter: counterReducer,
    cake:cakeReducer
    }
})


export default store