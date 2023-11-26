import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const getAllMessage = createAsyncThunk(
    "message/getAllMessage",
    async (_,thunkAPI) => {
        try {
            const res = await axios(``);
            return res.data
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }

);

const getMessageSlice = createSlice({
    name: "message",
    initialState: {
        data: [],
        isLoading: false,
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllMessage.pending, state => {
                state.isLoading = true
            })
            .addCase(getAllMessage.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.data = payload
            })
            .addCase(getAllMessage.rejected, (state, {payload}) => {
                state.error = payload;
                state.isLoading = false
            })
    }
});

export const {} = getMessageSlice.actions;

export default getMessageSlice.reducer