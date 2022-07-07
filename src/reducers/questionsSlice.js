import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  questions: [],
  error: "",
};


export const fetchQuesions = createAsyncThunk(
  "questions/fetchQuestions",
  async (params) => {
    try {
      const res = await axios.get(params.url);
      return [...res.data.items];
    } catch (err) {
      return err.message;
    }
  }
);

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchQuesions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchQuesions.fulfilled, (state, action) => {
      state.loading = false;
      state.questions = action.payload;
      state.error = "";
    });
    builder.addCase(fetchQuesions.rejected, (state, action) => {
      state.loading = false;
      state.questions = [];
      state.error = action.error.message;
    });
  },
});

export default questionsSlice.reducer;
