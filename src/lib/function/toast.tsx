import { toastKeyDto } from "../../model";
import { add, remove } from "../../store/toast";
import { generateId } from "./generate-number";
import { useAppDispatch } from "../../store";

export const toast = (dispath: ReturnType<typeof useAppDispatch>, key: toastKeyDto, payload: any) => {
    const id = generateId()

    dispath(add({ id, key, payload }))
    setTimeout(() => {
        dispath(remove({ id }))
    }, 2000)
}