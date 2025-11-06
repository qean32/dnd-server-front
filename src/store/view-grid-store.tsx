import { createSlice } from "@reduxjs/toolkit";

type stateDto = { view: boolean }

const initialState: stateDto = {
    view: true
}

const viewGridSlice = createSlice({
    name: 'view-grid-store',
    initialState,
    reducers: {
        swapViewGrid: (state: stateDto) => {
            state.view = !state.view
        },
    },
})

export const viewGridReducer = viewGridSlice.reducer
export const { swapViewGrid } = viewGridSlice.actions