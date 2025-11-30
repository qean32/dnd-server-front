import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type profileType = 'post' | 'session' | 'character'
type sessionType = 'bestiary' | 'characters' | 'queue' | 'objects'
type pushCharType = string | null
type stateDto = { profile: profileType, session: sessionType, user: pushCharType }

const initialState: stateDto = {
    profile: 'post',
    session: 'queue',
    user: null
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
        swapCharacterPush: (state: stateDto, { payload }: PayloadAction<pushCharType>) => {
            state.user = payload
        }
    },
})

export const viewContentReducer = viewContentSlice.reducer
export const { swapProfileContent, swapSessionToolContent, swapCharacterPush } = viewContentSlice.actions