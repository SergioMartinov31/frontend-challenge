import { configureStore } from '@reduxjs/toolkit'
import { catsApi } from '@/entities/cat/api/catsApi'
import { likesReducer } from '@/features/favorite-cat/model/slice'
import { loadLikesState, saveLikesState } from './localStorage'

const preloadedLikesState = loadLikesState()

export const store = configureStore({
  reducer: {
    [catsApi.reducerPath]: catsApi.reducer,
    likes: likesReducer,
  },
  preloadedState: preloadedLikesState
    ? {
        likes: preloadedLikesState,
      }
    : undefined,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catsApi.middleware),
})

store.subscribe(() => {
  saveLikesState(store.getState().likes)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
