import { createSlice } from "@reduxjs/toolkit";
import { entityDto } from "../model";

type stateDto = { entiries: entityDto[] }

const initialState: stateDto = {
    entiries: []
}

const entiriesSlice = createSlice({
    name: 'entiries-store',
    initialState,
    reducers: {
        add: (state: stateDto) => {
            state.entiries = [...state.entiries, { id: 123123, name: 'zxc', discription: '', path: '/img/dnd+.jpg', position: { x: 400, y: 400 }, size: 100, status: 'dead', view: true }]
        }
    },
})

export const addReducer = entiriesSlice.reducer
export const { add } = entiriesSlice.actions