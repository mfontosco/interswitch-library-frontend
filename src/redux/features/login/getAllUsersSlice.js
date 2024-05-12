import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import usersServices from './loginServices'


const initialState = {
    users: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
};

export const getUsersAction = createAsyncThunk("api/users/",async (_, thunkAPI) => {
        try {
            console.log("response------->>>>>>>>")
            // Corrected: Await the async function call
            const response = await usersServices.getAllUser();

            console.log("response------->>>>>",response)
            return response
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            // toast.warning(`${message}`);
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const getUsersSlice = createSlice({
    name: "users",
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
        builder.addCase (getUsersAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase (getUsersAction.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.users = action.payload;
        });
        builder.addCase(getUsersAction.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
        });
    }
});

export const { reset } = getUsersSlice.actions;

export default getUsersSlice.reducer;
