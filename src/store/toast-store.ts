import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { idDto, toastDto } from '../model'

type stateDto = { toasts: toastDto[] }

const initialState: stateDto = {
    toasts: []
}

const ToastSlice = createSlice({
    name: 'toast-stote',
    initialState,
    reducers: {
        add: (state: stateDto, { payload }: PayloadAction<toastDto>) => {
            state.toasts = [...state.toasts, { ...payload, view: true }]
        },
        remove: (state: stateDto, { payload }: PayloadAction<idDto>) => {
            state.toasts = [
                // @ts-ignore
                ...state.toasts.filter(item => item.id != payload.id),
                // @ts-ignore
                { ...state.toasts.find(item => item.id == payload.id), view: false }
            ]
        },
    },
})

export const toastReducer = ToastSlice.reducer
export const { add, remove } = ToastSlice.actions