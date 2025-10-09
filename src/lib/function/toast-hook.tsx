import { ToastCreateEntity } from "../../component/ui/toast"
import { toastKeyDto } from "../../model"



export const toastHook = (key: toastKeyDto, key_: number, view: boolean, payload: any) => {
    if (key == "create-entity") return <ToastCreateEntity view={view} key={key_} {...payload} />
    if (key == "event") return <ToastCreateEntity view={view} key={key_} {...payload} />
}