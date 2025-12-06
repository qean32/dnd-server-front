import { ToastPushEntity, ToastEventMessage, ToastMessage } from "@/component/case/toast"
import { toastKeyDto, toastPayloadDto } from "@/model"


export const toastHook = (key: toastKeyDto, key_: number, view: boolean, payload: toastPayloadDto | any) => {
    if (key == "push-entity") return <ToastPushEntity view={view} key={key_} {...payload} />
    if (key == "event-message") return <ToastEventMessage view={view} key={key_} {...payload} />
    if (key == "message") return <ToastMessage view={view} key={key_} {...payload} />
    return <>WTFIT!</>
}