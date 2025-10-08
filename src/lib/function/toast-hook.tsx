import { ToastCreateEntity } from "../../component/ui/toast"
import { toastKeyDto } from "../../model"



export const toastHook = (key: toastKeyDto, key_: number, payload: any) => {
    if (key == "create-entity") return <ToastCreateEntity key={key_} {...payload} />
    if (key == "event") return <ToastCreateEntity key={key_} {...payload} />
}