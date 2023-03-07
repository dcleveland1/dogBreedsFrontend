import { filterSlice } from './filterSlice';
import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './filterSlice'
import favoriteReducer from './favoriteSlice'
import imageGaleryReducer from './imageGalerySlice'

export const store = configureStore({
  reducer: {filterReducer,favoriteReducer,imageGaleryReducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch