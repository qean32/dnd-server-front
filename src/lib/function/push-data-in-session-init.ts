import { entityDto, mapDto, objectDto } from "@/model"
import { useAppDispatch } from "../castom-hook/redux"
import { pushEntity, pushMap, pushObject } from "@/store/session-store"

export const pushDataInSessionInit = (type: 'object' | 'entity' | 'map') => {
    const dispath = useAppDispatch()

    if (type == 'entity') {
        const push = (data: entityDto) => dispath(pushEntity(data))

        return push
    }

    if (type == 'object') {
        const push = (data: objectDto) => dispath(pushObject(data))

        return push
    }

    if (type == 'map') {
        const push = (data: mapDto) => dispath(pushMap(data))

        return push
    }

    const push = () => { }

    return push
}