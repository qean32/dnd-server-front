import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { toastReducer } from './toast-store'
import { searchReducer } from './search-store'
import { viewContentReducer } from './view-content-store'
import { viewGridReducer } from './view-grid-store'
import { sessionReducer } from './session-store'
import { viewImgReducer } from './view-img-store'
import { addCharacterInGameReducer } from './add-character-in-game-path-store'
import { objectBeingAddedToGameReducer } from './object-being-added-to-game-store'


const rootReducer = combineReducers({
    toast: toastReducer,
    viewImg: viewImgReducer,
    addCharacterInGame: addCharacterInGameReducer,
    search: searchReducer,
    viewContent: viewContentReducer,
    session: sessionReducer,
    viewGrid: viewGridReducer,
    addedObject: objectBeingAddedToGameReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
},)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()