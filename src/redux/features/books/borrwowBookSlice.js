import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bookServices from "./booksServices";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify"
console.log("services===>",bookServices)

const initialState = {
    borrow: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const borrowBookAction = createAsyncThunk("api/borrow", async (bookData, thunkAPI) => {

    try {
        const response = await bookServices.borowBook(bookData)
        
        return response
    } catch (error) {
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

export const borrowBookSlice = createSlice({
    name: "borrow",
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
        builder.addCase(borrowBookAction.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(borrowBookAction.fulfilled, (state, action) => {
            state.isLoading = false,
                state.isSuccess = true,
                state.borrow = action.payload
        })
        builder.addCase(borrowBookAction.rejected, (state, action) => {
            state.isLoading = false,
                state.isSuccess = false,
                state.isError = true,
                state.message = action.payload

        })
    }
})

export const { reset } = borrowBookSlice.actions;

export default borrowBookSlice.reducer