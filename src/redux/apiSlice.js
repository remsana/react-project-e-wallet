import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getName = createAsyncThunk("apiName/getName", async () => {
  let response = await fetch("https://randomuser.me/api/");
  let json = await response.json();
  const item = json.results[0];
  console.log(item.name.first);
  
  return item;
});

const apiSlice = createSlice({
  name: "apiName",
  initialState: {
    userName: null,
    status: null,
  },
  extraReducers: {
    [getName.fulfilled]: (state, action) => {
      state.userName = action.payload;
      state.status = "Success";
    },
    [getName.pending]: (state) => {
      state.status = "fetching...";
    },
    [getName.rejected]: (state) => {
      state.status = "Failed!";
    },
  },
});

export default apiSlice.reducer;
