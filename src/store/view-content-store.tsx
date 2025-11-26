import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type profileType = 'post' | 'session' | 'character'
type sessionType = 'bestiary' | 'characters' | 'queue' | 'objects'
type stateDto = { profile: profileType, session: sessionType }

const initialState: stateDto = {
    profile: 'post',
    session: 'queue'
}

const viewContentSlice = createSlice({
    name: 'view-content-store',
    initialState,
    reducers: {
        swapProfileContent: (state: stateDto, { payload }: PayloadAction<profileType>) => {
            state.profile = payload
        },
        swapSessionToolContent: (state: stateDto, { payload }: PayloadAction<sessionType>) => {
            state.session = payload
        },
    },
})

export const viewContentReducer = viewContentSlice.reducer
export const { swapProfileContent, swapSessionToolContent } = viewContentSlice.actions