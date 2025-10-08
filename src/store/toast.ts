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
            state.toasts = [...state.toasts, payload]
        },
        remove: (state: stateDto, { payload }: PayloadAction<idDto>) => {
            state.toasts = state.toasts.filter(item => item.id != payload.id)
        },
    },
})

export const toastReducer = ToastSlice.reducer
export const { add, remove } = ToastSlice.actions