import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: 0,
  password: null,
};

const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    changeEmail: state => {
      state.email == "awasaas";
    },
    decrement: state => {
      state.value -= 1;
    },
    incremet_by_amount: (state, value) => {
      state = state + value;
    },
  },
});

export const {increment, decrement, incremet_by_amount} = counterSlice.actions;

export default counterSlice.reducer;
