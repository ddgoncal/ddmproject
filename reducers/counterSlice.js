import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incremet_by_amount: (state, value) => {
      state = state + value;
    },
    set_value: (state, value) => {
      state = value;
    },
  },
});

export const {increment, decrement, incremet_by_amount, set_value} = counterSlice.actions;

export default counterSlice.reducer;
