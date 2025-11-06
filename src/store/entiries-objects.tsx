import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { entityDto, objectDto } from "../model";

type stateDto = { entities: entityDto[], objects: objectDto[] }

const initialState: stateDto = {
    entities: [],
    objects: []
}

const entityObjectSlice = createSlice({
    name: 'entity-object-store',
    initialState,
    reducers: {
        addSomethingToGame: (state: stateDto, { payload: { payload, type } }: PayloadAction<{ type: 'entities' | 'objects', payload: objectDto | entityDto | any }>) => {
            state[type] = [...state[type], payload]
        }
    },
})

export const entityObjectReducer = entityObjectSlice.reducer
export const { addSomethingToGame } = entityObjectSlice.actions