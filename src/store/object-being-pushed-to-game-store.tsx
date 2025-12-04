import { entityDto, mapDto, objectDto } from "@/model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type stateDto = { object: entityDto | mapDto | objectDto | null | any }

const initialState: stateDto = { object: null }

const objectBeingPushedToGameSlice = createSlice({
    name: 'object-being-pushed-to-game',
    initialState,
    reducers: {
        swapObjectBeingPushedToGame(state: stateDto, { payload: { object } }: PayloadAction<{ object: entityDto | mapDto | objectDto }>) {
            state.object = object
        },
    },
})

export const objectBeingPushedToGameReducer = objectBeingPushedToGameSlice.reducer
export const { swapObjectBeingPushedToGame } = objectBeingPushedToGameSlice.actions