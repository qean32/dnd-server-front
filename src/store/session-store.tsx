import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sessionDto, mapDto, idDto } from "@/model";
import { characterDto, entityDto, objectDto } from "@/model/entities.dto";
import { generateId } from "@/lib/function";

const gameStorage = 'game-storage'
const bestiaryStorage = 'bestiary-storage'

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


        // """"""""""""""""""""""""""""""""""""""""""" { entity action } """"""""""""""""""""""""""""""""""""""""""" //

        changeEntity: (state: stateDto, { payload: { payload } }: PayloadAction<{ payload: Pick<entityDto, 'position' & 'id' & 'size'> }>) => {
            console.log(state.session.currentMap.id);

            state.session.mapsData[state.session.currentMap.id].entities = [
                // @ts-ignore
                ...state.session.mapsData[state.session.currentMap.id].entities.filter(item => item.id != payload.id),
                // @ts-ignore
                { ...state.session.mapsData[state.session.currentMap.id].entities.find(item => item.id == payload.id), ...payload }
            ]
        },
        pushEntity: (state: stateDto, { payload }: PayloadAction<entityDto>) => {
            const id = generateId()
            state.session.mapsData[state.session.currentMap.id].entities = [
                ...state.session.mapsData[state.session.currentMap.id].entities,
                { ...payload, id }
            ]

            state.session.mapsData[state.session.currentMap.id].queue = [
                ...state.session.mapsData[state.session.currentMap.id].queue,
                { ...payload, id }
            ]
        },
        removeEntity: (state: stateDto, { payload: { id } }: PayloadAction<idDto>) => {
            state.session.mapsData[state.session.currentMap.id].entities
                = state.session.mapsData[state.session.currentMap.id].entities.filter(item => item.id != id)
            state.session.mapsData[state.session.currentMap.id].queue
                = state.session.mapsData[state.session.currentMap.id].entities.filter(item => item.id != id)
        },

        // """"""""""""""""""""""""""""""""""""""""""" { object action } """"""""""""""""""""""""""""""""""""""""""" //

        pushObject: (state: stateDto, { payload }: PayloadAction<objectDto>) => {
            state.session.mapsData[state.session.currentMap.id].objects = [
                ...state.session.mapsData[state.session.currentMap.id].objects,
                payload
            ]
        },

        // """"""""""""""""""""""""""""""""""""""""""" { map action } """"""""""""""""""""""""""""""""""""""""""" //

        swapCurrentMap: (state: stateDto, { payload }: PayloadAction<idDto>) => {
            state.session.currentMap =
                state.session.maps.find(item => item.id == payload.id)
                ??
                state.session.currentMap
        },
        pushMap: (state: stateDto, { payload }: PayloadAction<mapDto>) => {
            const id = generateId()
            state.session.maps = [
                ...state.session.maps,
                { ...payload, id }
            ]
            state.session.mapsData[id] = {
                entities: [],
                objects: [],
                queue: []
            }
        },
        removeMap: (state: stateDto, { payload: { id } }: PayloadAction<idDto>) => {
            state.session.maps = state.session.maps.filter(item => item.id != id)
        },

        // """"""""""""""""""""""""""""""""""""""""""" { character action } """"""""""""""""""""""""""""""""""""""""""" //

        pushCharacter: (state: stateDto, { payload }: PayloadAction<characterDto>) => {
            state.session.characters = [
                ...state.session.characters,
                payload
            ]
        },
        removeCharacter: (state: stateDto, { payload: { id } }: PayloadAction<idDto>) => {
            state.session.characters = state.session.characters.filter(item => item.id != id)
        },

        // """"""""""""""""""""""""""""""""""""""""""" { queue action } """"""""""""""""""""""""""""""""""""""""""" //

        changeQueue: (state: stateDto, { payload: { queue } }: PayloadAction<{ queue: any[] }>) => {
            state.session.mapsData[state.session.currentMap.id].queue = queue
        },
        nextQueue: (state: stateDto) => {
            state.session.mapsData[state.session.currentMap.id].queue = swap(state.session.mapsData[state.session.currentMap.id].queue)
        },

        // """"""""""""""""""""""""""""""""""""""""""" { bestiary action } """"""""""""""""""""""""""""""""""""""""""" //

        editBestiary: (state: stateDto, { payload: { id, newEntity } }: PayloadAction<{ id: number, newEntity: entityDto }>) => {
            state.bestiary = [
                ...state.bestiary.filter(item => item.id != id),
                newEntity
            ]
        },
        pushToBestiary: (state: stateDto, { payload }: PayloadAction<entityDto>) => {
            state.bestiary = [...state.bestiary, payload]
        },
    },
})

export const sessionReducer = sessionSlice.reducer
export const {

    changeEntity,
    removeEntity,
    pushEntity,

    pushObject,

    swapCurrentMap,
    pushMap,
    removeMap,

    changeQueue,
    nextQueue,

    pushToBestiary,
    editBestiary,

    pushCharacter,
    removeCharacter

} = sessionSlice.actions