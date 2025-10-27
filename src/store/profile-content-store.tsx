import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateDto = { type: 'post' | 'game' | 'character' }

const initialState: stateDto = {
    type: 'character'
}

const profileContentSlice = createSlice({
    name: 'profile-content-stote',
    initialState,
    reducers: {
        changeProfileContent: (state: stateDto, { payload }: PayloadAction<'post' | 'game' | 'character'>) => {
            state.type = payload
        },
    },
})

export const profileContentReducer = profileContentSlice.reducer
export const { changeProfileContent } = profileContentSlice.actions