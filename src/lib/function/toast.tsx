import { toastKeyDto } from "../../model";
import { useAppDispatch } from "../../store";
import { add, remove } from "../../store/toast";
import { generateId } from "./generate-number";

export const toast = (key: toastKeyDto, payload: any) => {
    const dispath = useAppDispatch()
    const id = generateId()

    dispath(add({ id, key, payload }))
    setTimeout(() => {
        dispath(remove({ id }))
    }, 2000)
}