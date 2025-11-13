import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type profileType = 'post' | 'game' | 'character'
type gameType = 'bestiary' | 'characters' | 'queue' | 'objects'
type stateDto = { profile: profileType, game: gameType }

const initialState: stateDto = {
    profile: 'post',
    game: 'bestiary'
}

const viewContentSlice = createSlice({
    name: 'view-content-store',
    initialState,
    reducers: {
        swapProfileContent: (state: stateDto, { payload }: PayloadAction<profileType>) => {
            state.profile = payload
        },
        swapGameToolContent: (state: stateDto, { payload }: PayloadAction<gameType>) => {
            state.game = payload
        },
    },
})

export const viewContentReducer = viewContentSlice.reducer
export const { swapProfileContent, swapGameToolContent } = viewContentSlice.actions