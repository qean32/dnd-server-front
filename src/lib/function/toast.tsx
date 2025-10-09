import { toastKeyDto } from "../../model";
import { add, remove } from "../../store/toast-store";
import { generateId } from "./generate-number";
import { useAppDispatch } from "../../store";

export const toast = (dispath: ReturnType<typeof useAppDispatch>, key: toastKeyDto, payload: any, timeout: number = 2000) => {
    const id = generateId()

    dispath(add({ id, key, payload, view: true }))
    setTimeout(() => {
        dispath(remove({ id }))
    }, timeout)
}