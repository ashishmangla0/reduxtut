import { createSlice } from "@reduxjs/toolkit";

const cakeSliceInitial = {
  numOfCake: 10,
  message: "",
};

const cakeSlice = createSlice({
  name: "cake",
  initialState: cakeSliceInitial,
  reducers: {
    orderCake: (state) => {
      if (state.numOfCake > 0) {
        state.numOfCake -= 1;
        state.message = ""; // reset message if it was showing "out of stock"
      }

      if (state.numOfCake === 0) {
        state.message = "No cake in the stock";
      }
    },

    reStock: (state, action) => {
      state.numOfCake += parseInt(action?.payload);
    },
  },
});

export const { orderCake, reStock } = cakeSlice.actions;

export default cakeSlice.reducer;
