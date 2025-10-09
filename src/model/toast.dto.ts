import { toastKeyDto } from "./toast.key.dto";

export type toastDto = {
    key: toastKeyDto,
    id: number,
    payload: {
        name?: string
        // other ?
    },
    view: boolean
}