import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  tags: [],
  error: "",
};

export const fetchTags = createAsyncThunk("tags/fetchTags", async (params) => {
  try {
    const res = await axios.get(params.url);
    return res.data.items;
  } catch (err) {
    return err.message;
  }
});

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTags.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTags.fulfilled, (state, action) => {
      state.loading = false;
      state.tags = action.payload;
      state.error = "";
    });
    builder.addCase(fetchTags.rejected, (state, action) => {
      state.loading = false;
      state.tags = [];
      state.error = action.error.message;
    });
  },
});

export default tagsSlice.reducer;
