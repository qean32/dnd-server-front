import { toastKeyDto, toastPayloadDto } from "@/model";
import { pushToast, removeToast } from "@/store/toast-store";
import { generateId } from "./generate-number";
import { useAppDispatch } from "@/store";

export const toast = (dispath: ReturnType<typeof useAppDispatch>, key: toastKeyDto, payload?: toastPayloadDto, timeout: number = 2000) => {
    const id = generateId()

    dispath(pushToast({ id, key, payload: payload ?? {}, view: true }))
    setTimeout(() => {
        dispath(removeToast({ id }))
    }, timeout)
}