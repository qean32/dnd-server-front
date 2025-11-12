import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateDto = { href: string }

const initialState: stateDto = { href: '' }

const addCharacterInGamePathSlice = createSlice({
    name: 'add-character-in-game',
    initialState,
    reducers: {
        swapAddCharacterInGamePath(state: stateDto, { payload: { href } }: PayloadAction<{ href: string }>) {
            state.href = href
        },
    },
})

export const addCharacterInGameReducer = addCharacterInGamePathSlice.reducer
export const { swapAddCharacterInGamePath } = addCharacterInGamePathSlice.actions