import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sessionDto, mapDto } from "@/model";

const gameStorage = 'game-storage'
const bestiaryStorage = 'bestiary-storage'

type stateDto = { session: sessionDto, bestiary: any[] }

const initialState: stateDto = {
    session: {
        ...JSON.parse((localStorage.getItem(gameStorage) as string)),
    },
    bestiary: [
        ...JSON.parse((localStorage.getItem(bestiaryStorage) as string)) ?? [],
    ]
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
        changeQueue: (state: stateDto, { payload: { queue, name } }: PayloadAction<{ queue: any[], name: string }>) => {
            state.session.mapsData[name].queue = queue
        },
        addToBestiary: (state: stateDto, { payload: { newEntity } }: PayloadAction<any>) => {
            state.bestiary = [...state.bestiary, newEntity]
        }
    },
})

export const sessionReducer = sessionSlice.reducer
export const { changeSomethingEntity, swapCurrentMap, changeQueue, addToBestiary } = sessionSlice.actions