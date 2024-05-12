import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bookServices from "./booksServices";
import { toast } from "react-toastify";


const initialState = {
    borrowedBooks: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
};

export const getBorrowedBookAction = createAsyncThunk(
    "api/get-borrowed-books/",
    async (_, thunkAPI) => {
        try {
            
            return await bookServices.getBorrowedBooks();
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

export const getBorrowedBookSlice = createSlice({
    name: "borrowedBooks",
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
        builder.addCase (getBorrowedBookAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase (getBorrowedBookAction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.borrow = action.payload;
        });
        builder.addCase(getBorrowedBookAction.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
});

export const { reset } = getBorrowedBookSlice.actions;

export default getBorrowedBookSlice.reducer;
