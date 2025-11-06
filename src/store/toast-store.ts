import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { idDto, toastDto } from '../model'

type stateDto = { toasts: toastDto[] }

const initialState: stateDto = {
    toasts: []
}

const toastSlice = createSlice({
    name: 'toast-store',
    initialState,
    reducers: {
        addToast: (state: stateDto, { payload }: PayloadAction<toastDto>) => {
            state.toasts = [...state.toasts, { ...payload, view: true }]
        },
        removeToast: (state: stateDto, { payload }: PayloadAction<idDto>) => {
            state.toasts = [
                // @ts-ignore
                ...state.toasts.filter(item => item.id != payload.id),
                // @ts-ignore
                { ...state.toasts.find(item => item.id == payload.id), view: false }
            ]
        },
    },
})

export const toastReducer = toastSlice.reducer
export const { addToast, removeToast } = toastSlice.actions