import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { entityDto, gameDto, mapDto, objectDto } from "../model";

type stateDto = { game: gameDto }

const initialState: stateDto = {
    game: {
        currentMap: { name: '', path: '', size: { x: 0, y: 0 } },
        id: '1',
        name: 'zxc',
        maps: [],
        mapsData: new Map([])
    }
}

const gameSlice = createSlice({
    name: 'game-store',
    initialState,
    reducers: {
        addSomethingEntity: (state: stateDto, { payload: { payload, type } }: PayloadAction<{ type: 'entities' | 'objects', payload: entityDto | mapDto | objectDto }>) => {
            const newMapData = new Map(state.game.mapsData)
            const currentData = state.game.mapsData.get(state.game.currentMap.name)
            if (currentData) {
                newMapData.set(state.game.currentMap.name, { ...currentData, [type]: [...currentData[type], payload] })
                state.game = { ...state.game, mapsData: newMapData }
            }
        },
        swapCurrentMap: (state: stateDto, { payload: { map } }: PayloadAction<{ map: mapDto }>) => {
            state.game.currentMap = map
        },

    },
})

export const gameReducer = gameSlice.reducer
export const { } = gameSlice.actions