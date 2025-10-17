import { useEffect } from "react"
import { useBoolean } from "./use-boolean"

export const useMount = (view: boolean) => {
    const { boolean: mount, off, on } = useBoolean(false)

    useEffect(() => {
        if (view && !mount) {
            on()
        } else if (!view && mount) {
            setTimeout(off, 700)
        }
    }, [view])

    return mount
}