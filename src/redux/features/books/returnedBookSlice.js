import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bookServices from "./booksServices";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify"
console.log("services===>",bookServices)

const initialState = {
    returned: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const returnBookAction = createAsyncThunk("api/returned", async (bookData, thunkAPI) => {

    try {
        const response = await bookServices.returnBook(bookData)
        
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

export const returnBookSlice = createSlice({
    name: "returned",
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
        builder.addCase(returnBookAction.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(returnBookAction.fulfilled, (state, action) => {
            state.isLoading = false,
                state.isSuccess = true,
                state.returned = action.payload
        })
        builder.addCase(returnBookAction.rejected, (state, action) => {
            state.isLoading = false,
                state.isSuccess = false,
                state.isError = true,
                state.message = action.payload

        })
    }
})

export const { reset } = returnBookSlice.actions;

export default returnBookSlice.reducer