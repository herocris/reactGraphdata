import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/auth'
import { userSlice } from './slices/user'
import { resourceSlice } from './slices/resouce'
import { roleSlice } from './slices/rol'
import { permissionSlice } from './slices/permission'
import { activitySlice } from './slices/activity'
import { ammunitionSlice } from './slices/ammunition'
import { drugSlice } from './slices/drug'
import { weaponSlice } from './slices/weapon'
import { drugPresentationSlice } from './slices/drugPresentation'
import { confiscationSlice } from './slices/confiscation'


export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
    resource:resourceSlice.reducer,
    role:roleSlice.reducer,
    permission:permissionSlice.reducer,
    activity:activitySlice.reducer,
    ammunition:ammunitionSlice.reducer,
    drug:drugSlice.reducer,
    weapon:weaponSlice.reducer,
    drugPresentation:drugPresentationSlice.reducer,
    confiscation:confiscationSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch