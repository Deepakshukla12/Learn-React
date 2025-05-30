import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: false,
    userData: null, // Fixed key name
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // actions
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData; // Consistent key
        },
        logout: (state) => {
            state.status = false;
            state.userData = null; // Clear the same key
        }
    }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
