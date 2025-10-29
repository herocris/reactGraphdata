import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
export interface Roles {
    name: string,
}
export interface Permissionss {
    name: string,
}
export interface User {
    name: string,
    email: string,
    roles: Roles[],
    permissions: Permissionss[]
}

export interface AuthState {
    status: string,
    user: User,
    errorMessage: {} | undefined
}
const user: User = {
    name: '', 
    email: '',
    roles:[],
    permissions:[], 
}
const initialState: AuthState = {
    status: 'checking',
    user: user,
    errorMessage: undefined
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onChecking: (state) => {
            state.status = 'checking';
            state.user = user;
            state.errorMessage = undefined;
        },
        onLogin: (state, { payload }: PayloadAction<User>) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
        },
        onLogout: (state, { payload }: PayloadAction<String|undefined>) => { //duda con el tipo del payload para errorMessage
            state.status = 'not-authenticated';
            state.user = user;
            state.errorMessage = payload;
        },
        clearErrorMessage: (state) => {
            state.errorMessage = undefined;
        }
    },
})

// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onLogout, clearErrorMessage } = authSlice.actions

