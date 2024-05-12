import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bookServices from "./booksServices";
import { toast } from "react-toastify";

console.log("------->something is here")
const initialState = {
    dashStats: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
};

export const getDashboardStatsAction = createAsyncThunk(
    "",
    async (_, thunkAPI) => {
        try {
            console.log("88888888888888888")
            const result = await bookServices.getDashboardStats()
            console.log("result",result)
            return result;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            toast.warning(`${message}`);
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const getDashboardStatSlice = createSlice({
    name: "dashStats",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = "";
        }
    },
    extraReducers: (builder) => {
        builder.addCase (getDashboardStatsAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase (getDashboardStatsAction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.dashStats= action.payload;
        });
        builder.addCase(getDashboardStatsAction.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
});

export const { reset } = getDashboardStatSlice.actions;

export default getDashboardStatSlice.reducer;
