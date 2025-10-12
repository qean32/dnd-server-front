import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { toastReducer } from './toast-store'
import { searchReducer } from './search-store'
import { profileContentReducer } from './profile-content-store'


const rootReducer = combineReducers({
    toast: toastReducer,
    search: searchReducer,
    profileContent: profileContentReducer
})

export const store = configureStore({
    reducer: rootReducer,
},)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()