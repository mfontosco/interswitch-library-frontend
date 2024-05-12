import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userServices from "./registerServices"
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify"


const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const createUserAction = createAsyncThunk("api/user", async (userData, thunkAPI) => {

    try {
        return await userServices.createUser(userData)
    } catch (error) {
        console.log("registerotp====>",error)
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();
        console.log(message)
        return thunkAPI.rejectWithValue(message);
    }
})

export const createUserSlice = createSlice({
    name: "user",
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
        builder.addCase(createUserAction.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(createUserAction.fulfilled, (state, action) => {
            state.isLoading = false,
                state.isSuccess = true,
                state.user = action.payload
        })
        builder.addCase(createUserAction.rejected, (state, action) => {
            state.isLoading = false,
                state.isSuccess = false,
                state.isError = true,
                state.message = action.payload

        })
    }
})

export const { reset } = createUserSlice.actions;

export default createUserSlice.reducer