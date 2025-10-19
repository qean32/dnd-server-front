import React from "react"

export const useSkipFirstRenderEffect = (effect: Function, deps: any[]) => {
    const isMount = React.useRef(true)

    React.useEffect(() => {
        !isMount.current && effect();
        if (isMount.current) {
            isMount.current = false
        }
    }, deps)
}