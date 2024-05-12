import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bookServices from "./booksServices";
import { toast } from "react-toastify";


const initialState = {
    books: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
};

export const getBookAction = createAsyncThunk(
    "api/Staff_list/",
    async (_, thunkAPI) => {
        try {
            
            return await bookServices.getBooks();
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

export const getBookSlice = createSlice({
    name: "book",
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
        builder.addCase (getBookAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase (getBookAction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.books = action.payload;
        });
        builder.addCase(getBookAction.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
});

export const { reset } = getBookSlice.actions;

export default getBookSlice.reducer;
