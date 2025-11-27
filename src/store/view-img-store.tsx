import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateDto = { path: string }

const initialState: stateDto = { path: '' }

const viewImgSlice = createSlice({
    name: 'view-img',
    initialState,
    reducers: {
        swapViewImg(state: stateDto, { payload: { path } }: PayloadAction<{ path: string }>) {
            state.path = path
        },
    },
})

export const viewImgReducer = viewImgSlice.reducer
export const { swapViewImg } = viewImgSlice.actions