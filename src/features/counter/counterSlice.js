import { createSlice } from "@reduxjs/toolkit";

const counterInitialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",

  initialState: counterInitialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement : (state) =>{

        if(state.value >0){
            state.value -=1;
        }
       
    },
    reset :(state) =>{
        state.value =  counterInitialState.value
    },
    incremetByAmount : (state,action) =>{
        state.value += action.payload

    }
  },
});

export const {increment,decrement,reset,incremetByAmount} = counterSlice.actions

export default counterSlice.reducer;
