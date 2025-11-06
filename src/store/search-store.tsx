import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateDto = { search: string }

const initialState: stateDto = {
    search: ''
}

const searchSlice = createSlice({
    name: 'search-store',
    initialState,
    reducers: {
        changeSearch: (state: stateDto, { payload }: PayloadAction<stateDto>) => {
            state.search = payload.search
        },
    },
})

export const searchReducer = searchSlice.reducer
export const { changeSearch } = searchSlice.actions