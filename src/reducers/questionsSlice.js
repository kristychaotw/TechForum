import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  questions: [],
  questionItems: [],
  error: "",
};

export const fetchQuesions = createAsyncThunk(
  "questions/fetchQuestions",
  async (params) => {
    try {
      const res = await axios.get(params.url);
      return res.data;
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
      state.questions = { ...state.questions, ...action.payload };
      state.questionItems = [...state.questionItems, ...action.payload.items];
      state.error = "";
    });
    builder.addCase(fetchQuesions.rejected, (state, action) => {
      state.loading = false;
      state.questions = [];
      state.error = action.error.message;
    });
  },
  reducers: {
    clearupValue: (state) => {
      state.questions = [];
      state.questionItems = [];
    },
  },
});

export const { clearupValue } = questionsSlice.actions;

export default questionsSlice.reducer;
