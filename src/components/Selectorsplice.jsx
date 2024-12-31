import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentTheme: 'light'
}

const selectorSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme(state, actions) {
            state.currentTheme = actions.payload;
        }
    }
})

export const {changeTheme} = selectorSlice.actions;
export default selectorSlice.reducer;