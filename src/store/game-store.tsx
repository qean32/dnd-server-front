import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { gameDto, mapDto } from "../model";
import { gameStorage } from "../export";

type stateDto = { game: gameDto }

const initialState: stateDto = {
    game: JSON.parse((localStorage.getItem(gameStorage) as string))
}

const gameSlice = createSlice({
    name: 'game-store',
    initialState,
    reducers: {
        changeSomethingEntity: (state: stateDto, { payload: { payload, type } }: PayloadAction<{ type: 'entities' | 'objects', payload: any }>) => {
            state.game.mapsData[state.game.currentMap.name][type] = [
                ...state.game.mapsData[state.game.currentMap.name][type].filter(item => item.id != payload.id),
                { ...state.game.mapsData[state.game.currentMap.name][type].find(item => item.id == payload.id), ...payload }
            ]
        },
        swapCurrentMap: (state: stateDto, { payload: { map } }: PayloadAction<{ map: mapDto }>) => {
            state.game.currentMap = map
        },

    },
})

export const gameReducer = gameSlice.reducer
export const { changeSomethingEntity, swapCurrentMap } = gameSlice.actions