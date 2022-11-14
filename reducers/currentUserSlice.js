import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: null,
};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    updateUser: (state, value) => {
      state.email == value;
    },
  },
});

export const {updateUser} = currentUserSlice.actions;

export default currentUserSlice.reducer;
