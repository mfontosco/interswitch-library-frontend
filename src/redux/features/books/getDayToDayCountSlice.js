import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bookServices from "./booksServices";
import { toast } from "react-toastify";

console.log("---->>>>>>>>>>>>")
const initialState = {
    dailyStats: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
};

export const getDayToDayStatsAction = createAsyncThunk(
    "api/get-dashboard-stats/",
    async (_, thunkAPI) => {
        try {
            console.log("==============>")
            const result = await bookServices.getDayToDayCount()
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

export const getDayToDayStatSlice = createSlice({
    name: "dailyStats",
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
        builder.addCase (getDayToDayStatsAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase (getDayToDayStatsAction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.dailyStats= action.payload;
        });
        builder.addCase(getDayToDayStatsAction.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
});

export const { reset } = getDayToDayStatSlice.actions;

export default getDayToDayStatSlice.reducer;
