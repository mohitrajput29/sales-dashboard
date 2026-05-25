import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";

import {
  fetchSalesAPI
} from "./salesAPI";

export const fetchSales =
  createAsyncThunk(

    "sales/fetchSales",

    async () => {

      const response =
        await fetchSalesAPI();

      return response;
    }
  );

const salesSlice = createSlice({

  name: "sales",

  initialState: {

    sales: [],
    loading: false,
    search: "",
    category: "All"
  },

  reducers: {

    setSearch(state, action) {

      state.search =
        action.payload;
    },

    setCategory(state, action) {

      state.category =
        action.payload;
    }
  },

  extraReducers: (builder) => {

    builder

      .addCase(
        fetchSales.pending,
        (state) => {

          state.loading = true;
        }
      )

      .addCase(
        fetchSales.fulfilled,
        (state, action) => {

          state.loading = false;

          state.sales =
            action.payload;
        }
      );
  }
});

export const {
  setSearch,
  setCategory
} = salesSlice.actions;

export default salesSlice.reducer;