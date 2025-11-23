import { entityDto, mapDto, objectDto } from "@/model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateDto = { object: entityDto | mapDto | objectDto | null | any }

const initialState: stateDto = { object: null }

const objectBeingAddedToGameSlice = createSlice({
    name: 'object-being-added-to-game',
    initialState,
    reducers: {
        swapObjectBeingAddedToGame(state: stateDto, { payload: { object } }: PayloadAction<{ object: entityDto | mapDto | objectDto }>) {
            state.object = object
        },
    },
})

export const objectBeingAddedToGameReducer = objectBeingAddedToGameSlice.reducer
export const { swapObjectBeingAddedToGame } = objectBeingAddedToGameSlice.actions