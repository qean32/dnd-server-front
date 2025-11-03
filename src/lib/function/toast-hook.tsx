import { ToastAddEntity, ToastAddObject, ToastEventMessage, ToastForwardCopy, ToastEmailMessage } from "../../component/children/toast"
import { toastKeyDto } from "../../model"



export const toastHook = (key: toastKeyDto, key_: number, view: boolean, payload: any) => {
    if (key == "add-entity") return <ToastAddEntity view={view} key={key_} {...payload} />
    if (key == "add-object") return <ToastAddObject view={view} key={key_} {...payload} />
    if (key == "forward-copy") return <ToastForwardCopy view={view} key={key_} {...payload} />
    if (key == "event-message") return <ToastEventMessage view={view} key={key_} {...payload} />
    if (key == "email-message") return <ToastEmailMessage view={view} key={key_} {...payload} />
    return <>WTFIT!</>
}