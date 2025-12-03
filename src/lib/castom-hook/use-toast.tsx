import { toastKeyDto, toastPayloadDto } from "@/model"
import { useAppDispatch } from "./redux"
import { pushToast, removeToast } from "@/store/toast-store"
import { generateId } from "../function"

export const useToast = () => {
    const dispath = useAppDispatch()
    const id = generateId()
    const toast = (key: toastKeyDto, payload?: toastPayloadDto, timeout: number = 2000) => {
        dispath(pushToast({ view: true, key, payload: payload ?? {}, id }))

        setTimeout(() => {
            dispath(removeToast({ id }))
        }, timeout)
    }

    return toast
}