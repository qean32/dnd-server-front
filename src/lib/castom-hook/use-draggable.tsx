import React from "react";
import { positionDto } from "@/model";

export const useDraggable = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [offset, setOffset] = React.useState<positionDto>({ left: 0, top: 0 })

    const dragEndHandler = (e: any) => {
        e.stopPropagation()
        if (ref.current) {
            const top = e.pageY - e.target.parentElement.parentElement.offsetTop - offset.top
            const left = e.pageX - e.target.parentElement.parentElement.offsetLeft - offset.left

            ref.current.style.top =
                (
                    top < 0
                        ?
                        0
                        : (top > window.innerHeight - 100
                            ?
                            top - 50
                            :
                            top)
                ) + 'px'
            ref.current.style.left =
                (
                    left < 0
                        ?
                        0
                        : (
                            left > window.innerWidth - 100
                                ?
                                left - 50
                                :
                                left)
                ) + 'px'
        }
    }

    React.useEffect(() => {
        const signal = new AbortController
        ref.current?.addEventListener('dragstart', (e) => {
            e.stopPropagation()
            setOffset({ left: e.offsetX, top: e.offsetY })
        }, signal)

        return () => signal.abort()
    }, [])

    return { dragEndHandler, ref }
}