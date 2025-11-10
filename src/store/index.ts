import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { toastReducer } from './toast-store'
import { searchReducer } from './search-store'
import { profileContentReducer } from './profile-content-store'
import { viewGridReducer } from './view-grid-store'
import { gameReducer } from './game-store'
import { entityObjectReducer } from './entiries-objects'
import { viewImgReducer } from './view-img'
import { addCharacterInGameReducer } from './add-character-in-game-path'


const rootReducer = combineReducers({
    toast: toastReducer,
    viewImg: viewImgReducer,
    addCharacterInGame: addCharacterInGameReducer,
    search: searchReducer,
    profileContent: profileContentReducer,
    game: gameReducer,
    viewGrid: viewGridReducer,
    entityObject: entityObjectReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
},)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()