import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userServices from "./loginServices"
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify"
console.log("services===>",userServices)

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const loginUserAction = createAsyncThunk("api/user", async (userData, thunkAPI) => {

    try {
        const response = await userServices.createUser(userData)
        localStorage.setItem("token", JSON.stringify(response?.user));
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

export const loginUserSlice = createSlice({
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
        builder.addCase(loginUserAction.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(loginUserAction.fulfilled, (state, action) => {
            state.isLoading = false,
                state.isSuccess = true,
                state.user = action.payload
        })
        builder.addCase(loginUserAction.rejected, (state, action) => {
            state.isLoading = false,
                state.isSuccess = false,
                state.isError = true,
                state.message = action.payload

        })
    }
})

export const { reset } = loginUserSlice.actions;

export default loginUserSlice.reducer