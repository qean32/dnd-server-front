import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateDto = { path: string }

const initialState: stateDto = { path: '' }

const addCharacterInGamePathSlice = createSlice({
    name: 'add-character-in-game',
    initialState,
    reducers: {
        swapAddCharacterInGamePath(state: stateDto, { payload: { path } }: PayloadAction<{ path: string }>) {
            state.path = path
        },
    },
})

export const addCharacterInGameReducer = addCharacterInGamePathSlice.reducer
export const { swapAddCharacterInGamePath } = addCharacterInGamePathSlice.actions