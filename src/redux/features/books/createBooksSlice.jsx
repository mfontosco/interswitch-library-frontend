import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bookServices from "./booksServices";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify"


const initialState = {
    book: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const createBookAction = createAsyncThunk("api/create-book", async (bookData, thunkAPI) => {

    try {
        const response = await bookServices.createBooks(bookData)
        
        return response
    } catch (error) {
        console.log("error",error)
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
        console.log(message)
           toast.error(`${message}`);
        return thunkAPI.rejectWithValue(message);
    }
})

export const createBookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false,
                state.isSuccess = false,
                state.isLoading = false,
                state.message = ""
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createBookAction.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(createBookAction.fulfilled, (state, action) => {
            state.isLoading = false,
                state.isSuccess = true,
                state.create = action.payload
        })
        builder.addCase(createBookAction.rejected, (state, action) => {
            state.isLoading = false,
                state.isSuccess = false,
                state.isError = true,
                state.message = action.payload

        })
    }
})

export const { reset } = createBookSlice.actions;

export default createBookSlice.reducer