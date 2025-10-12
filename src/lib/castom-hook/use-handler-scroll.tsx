import React from "react";
import { useBoolean } from ".";

export const useHandlerScroll = (daley: number = 100, direction: 'top' | 'bottom' = 'top') => {
    const { on, off, boolean } = useBoolean(false);
    const refHandler = React.useRef<HTMLDivElement | null>(null)
    const controller = new AbortController

    React.useEffect(() => {
        const nodeHandler = refHandler.current

        if (nodeHandler) {
            const fn = () => {
                (direction == 'top' && nodeHandler.getBoundingClientRect()[direction] < window.innerHeight + daley)
                    ||
                    (direction == "bottom" && nodeHandler.getBoundingClientRect()[direction] > daley) ?
                    on()
                    :
                    off()
            }
            window.addEventListener('scroll', fn, { signal: controller.signal })

            return function () {
                controller.abort()
            }
        }
    }, [])

    return { boolean, refHandler }
}
