import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sessionDto, mapDto, idDto } from "@/model";
import { characterDto, entityDto } from "@/model/entities.dto";

const gameStorage = 'game-storage'
const bestiaryStorage = 'bestiary-storage'
type mapDataDto = 'entities' | 'objects'

type stateDto = { session: sessionDto, bestiary: any[] }

function swap(array: any[]) {
    [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
    return array;
}

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
        changeEntity: (state: stateDto, { payload: { payload, type } }: PayloadAction<{ type: mapDataDto, payload: any }>) => {
            state.session.mapsData[state.session.currentMap.name][type] = [
                ...state.session.mapsData[state.session.currentMap.name][type].filter(item => item.id != payload.id),
                { ...state.session.mapsData[state.session.currentMap.name][type].find(item => item.id == payload.id), ...payload }
            ]
        },
        swapCurrentMap: (state: stateDto, { payload }: PayloadAction<{ path: string }>) => {
            state.session.currentMap =
                state.session.maps.find(item => item.path == payload.path)
                ??
                state.session.currentMap
        },
        changeQueue: (state: stateDto, { payload: { queue } }: PayloadAction<{ queue: any[] }>) => {
            state.session.mapsData[state.session.currentMap.name].queue = queue
        },
        nextQueue: (state: stateDto) => {
            state.session.mapsData[state.session.currentMap.name].queue = swap(state.session.mapsData[state.session.currentMap.name].queue)
        },
        editBestiary: (state: stateDto, { payload: { id, newEntity } }: PayloadAction<{ id: number, newEntity: entityDto }>) => {
            state.bestiary = [
                ...state.bestiary.filter(item => item.id != id),
                newEntity
            ]
        },
        pushMap: (state: stateDto, { payload }: PayloadAction<mapDto>) => {
            state.session.maps = [
                ...state.session.maps,
                { ...payload, id: state.session.maps.length++ }
            ]
            state.session.mapsData[payload.name] = {
                entities: [],
                objects: [],
                queue: []
            }
        },
        pushCharacter: (state: stateDto, { payload }: PayloadAction<characterDto>) => {
            state.session.characters = [
                ...state.session.characters,
                payload
            ]
        },
        pushToBestiary: (state: stateDto, { payload }: PayloadAction<entityDto>) => {
            state.bestiary = [...state.bestiary, payload]
        },
        pushToSession: (state: stateDto, { payload: { newEntity, type } }: PayloadAction<{ newEntity: any, type: mapDataDto }>) => {
            state.session.mapsData[state.session.currentMap.name][type] = [
                ...state.session.mapsData[state.session.currentMap.name][type],
                { ...newEntity, id: state.session.mapsData[state.session.currentMap.name][type].length++ }
            ]

            if (type == 'entities') {
                state.session.mapsData[state.session.currentMap.name].queue = [
                    ...state.session.mapsData[state.session.currentMap.name].queue,
                    newEntity
                ].sort((a, b) => b.initiative - a.initiative)
            }
        },
        removeCharacter: (state: stateDto, { payload: { id } }: PayloadAction<idDto>) => {
            state.session.characters = state.session.characters.filter(item => item.id != id)
        },
        removeEntity: (state: stateDto, { payload: { id, type } }: PayloadAction<{ id: number, type: mapDataDto }>) => {
            // @ts-ignore
            state.session.mapsData[state.session.currentMap.name][type]
                = state.session.mapsData[state.session.currentMap.name][type].filter(item => item.id != id)
        },
        removeMap: (state: stateDto, { payload: { id } }: PayloadAction<idDto>) => {
            state.session.maps = state.session.maps.filter(item => item.id != id)
        },
    },
})

export const sessionReducer = sessionSlice.reducer
export const {
    changeEntity,
    swapCurrentMap,
    changeQueue,
    pushToBestiary,
    pushToSession,
    pushMap,
    editBestiary,
    removeEntity,
    removeMap,
    nextQueue,
    pushCharacter,
    removeCharacter
} = sessionSlice.actions