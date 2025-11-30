import { entityDto, mapDto, objectDto } from "@/model"
import { useAppDispatch } from "../castom-hook/redux"
import { pushToSession } from "@/store/session-store"

export const pushDataInSessionInit = () => {
    // JSON.parse(e.target.parentElement.parentElement.getAttribute('data'))
    const dispath = useAppDispatch()
    const push = (data: entityDto | mapDto | objectDto) => dispath(pushToSession({ newEntity: data, type: 'entities' }))

    return push
}