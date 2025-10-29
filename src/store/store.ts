import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '../modules/user'
import { drugPresentationSlice } from '../modules/drugPresentation'
import { confiscationSlice } from '../modules/confiscation'
import { drugConfiscationSlice } from '../modules/drugConfiscation'
import { weaponConfiscationSlice } from '../modules/weaponConfiscation'
import { ammunitionConfiscationSlice } from '../modules/ammunitionConfiscation/slices/ammunitionConfiscationSlice'
import { activitySlice } from '../modules/activity'
import { ammunitionSlice } from '../modules/ammunition'
import { authSlice } from '../modules/auth'
import { drugSlice } from '../modules/drug'
import { resourceSlice } from '../modules/resouce'
import { graphSlice } from '../modules/graph'
import { mapSlice } from '../modules/map'
import { roleSlice } from '../modules/rol'
import { permissionSlice } from '../modules/permission'
import { weaponSlice } from '../modules/weapon'

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
    drugConfiscation:drugConfiscationSlice.reducer,
    weaponConfiscation:weaponConfiscationSlice.reducer,
    ammunitionConfiscation:ammunitionConfiscationSlice.reducer,
    graph:graphSlice.reducer,
    map:mapSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch