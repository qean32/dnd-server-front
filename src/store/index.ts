import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { toastReducer } from './toast-store'
import { sessionReducer } from './session-store'
import { objectBeingPushedToGameReducer } from './object-being-pushed-to-game-store'


const rootReducer = combineReducers({
    toast: toastReducer,
    session: sessionReducer,
    pushedObject: objectBeingPushedToGameReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
},)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()