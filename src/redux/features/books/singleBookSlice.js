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

export const getBookAction = createAsyncThunk("api/create-book", async (id, thunkAPI) => {

    try {
        const response = await bookServices.getBook(id)
        
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

export const getBookSlice = createSlice({
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
        builder.addCase(getBookAction.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getBookAction.fulfilled, (state, action) => {
            state.isLoading = false,
                state.isSuccess = true,
                state.book = action.payload
        })
        builder.addCase(getBookAction.rejected, (state, action) => {
            state.isLoading = false,
                state.isSuccess = false,
                state.isError = true,
                state.message = action.payload

        })
    }
})

export const { reset } = getBookSlice.actions;

export default getBookSlice.reducer