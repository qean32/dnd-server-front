import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sessionDto, mapDto } from "@/model";
import { gameStorage } from "@/export";

type stateDto = { session: sessionDto }

const initialState: stateDto = {
    session: JSON.parse((localStorage.getItem(gameStorage) as string))
}

const sessionSlice = createSlice({
    name: 'session-store',
    initialState,
    reducers: {
        changeSomethingEntity: (state: stateDto, { payload: { payload, type } }: PayloadAction<{ type: 'entities' | 'objects', payload: any }>) => {
            state.session.mapsData[state.session.currentMap.name][type] = [
                ...state.session.mapsData[state.session.currentMap.name][type].filter(item => item.id != payload.id),
                { ...state.session.mapsData[state.session.currentMap.name][type].find(item => item.id == payload.id), ...payload }
            ]
        },
        swapCurrentMap: (state: stateDto, { payload: { map } }: PayloadAction<{ map: mapDto }>) => {
            state.session.currentMap = map
        },

    },
})

export const sessionReducer = sessionSlice.reducer
export const { changeSomethingEntity, swapCurrentMap } = sessionSlice.actions