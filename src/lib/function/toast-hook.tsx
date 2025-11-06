import { ToastAddEntity, ToastEventMessage, ToastMessage } from "../../component/children/toast"
import { toastKeyDto, toastPayloadDto } from "../../model"



export const toastHook = (key: toastKeyDto, key_: number, view: boolean, payload: toastPayloadDto | any) => {
    if (key == "add-entity") return <ToastAddEntity view={view} key={key_} {...payload} />
    if (key == "event-message") return <ToastEventMessage view={view} key={key_} {...payload} />
    if (key == "message") return <ToastMessage view={view} key={key_} {...payload} />
    return <>WTFIT!</>
}