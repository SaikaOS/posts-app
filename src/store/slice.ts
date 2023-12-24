import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
    username: string | number,
    password: string | number,
}

const initialState:IState = {
    username: '',
    password: '',
}

export const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        setUserName: (state, action:PayloadAction<string | number>) => {
            state.username = action.payload
        },
        setPassword: (state, action:PayloadAction<string | number>) => {
            state.password = action.payload
        }
    }
})

export const { setUserName, setPassword} = slice.actions

export default slice.reducer