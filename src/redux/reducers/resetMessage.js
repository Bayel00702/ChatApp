
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    success: false,
    error: null,
};

const resMessageSlice = createSlice({
    name: 'resMessage',
    initialState,
    reducers: {},
});

export default resMessageSlice.reducer;