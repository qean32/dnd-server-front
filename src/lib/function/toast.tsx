import { toastKeyDto } from "../../model";
import { addToast, removeToast } from "../../store/toast-store";
import { generateId } from "./generate-number";
import { useAppDispatch } from "../../store";

export const toast = (dispath: ReturnType<typeof useAppDispatch>, key: toastKeyDto, payload: any, timeout: number = 2000) => {
    const id = generateId()

    dispath(addToast({ id, key, payload, view: true }))
    setTimeout(() => {
        dispath(removeToast({ id }))
    }, timeout)
}