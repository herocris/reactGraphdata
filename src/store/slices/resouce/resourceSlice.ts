import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ResourceState, SelectResourceState } from '../../../shared/interfaces/sharedInterfaces';


const initialState: ResourceState = {
    roles: [],
    permisos: [],
    loading: false
}

export const resourceSlice = createSlice({
    name: 'resource',
    initialState,
    reducers: {
        onLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.loading = payload;
        },
        setRoles: (state, { payload }: PayloadAction<string[]>) => {
            state.roles = payload;
        },
        setPermissions: (state, { payload }: PayloadAction<string[]>) => {
            state.permisos = payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setRoles, setPermissions, onLoading } = resourceSlice.actions

