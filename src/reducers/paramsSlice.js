import { createSlice } from "@reduxjs/toolkit";

const paramsInitialState = {
  searchWord: "",
  tag: "",
  page: 1,
  nextPage: "",
};

const paramsSlice = createSlice({
  name: "params",
  initialState: { value: paramsInitialState },
  reducers: {
    updateParams: (state, action) => {
      let item = Object.keys(action.payload)[0];
      let itemValue = Object.values(action.payload)[0];
      state.value[item] = itemValue;
    },
  },
});

export const { updateParams } = paramsSlice.actions;

export default paramsSlice.reducer;
