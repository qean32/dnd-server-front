import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateDto = { href: string }

const initialState: stateDto = { href: '' }

const viewImgSlice = createSlice({
    name: 'view-img',
    initialState,
    reducers: {
        swapViewImg(state: stateDto, { payload: { href } }: PayloadAction<{ href: string }>) {
            state.href = href
        },
    },
})

export const viewImgReducer = viewImgSlice.reducer
export const { swapViewImg } = viewImgSlice.actions