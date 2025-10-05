import React from "react";
import { RightSideGame } from "../component/general"
import { HeightToolGame } from "../component/shared"
import { positionDto } from "../model";

export const GamePage = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [offset, setOffset] = React.useState<positionDto>({ left: 0, top: 0 })

    const dragEndHandler = (e: any) => {
        if (ref.current) {
            ref.current.style.top = (e.pageY - offset.top) + 'px'
            ref.current.style.left = (e.pageX - offset.left) + 'px'
        }
    }

    React.useEffect(() => {
        const signal = new AbortController
        ref.current?.addEventListener('dragstart', (e) => {
            setOffset({ left: e.offsetX, top: e.offsetY })
        }, signal)

        return () => signal.abort()
    }, [])

    return (
        <>
            <RightSideGame />
            <HeightToolGame />
            <main className="w-[100%] h-[90vh]">
                <div
                    draggable
                    ref={ref}
                    onDragEnd={dragEndHandler}
                    className="w-[1400px] h-[750px] rounded-lg fixed overflow-hidden bg-color-dark cursor-pointer"
                >
                    <div className="area w-full h-full" style={{ scale: '1.005' }}></div>
                </div>
            </main >
        </>
    )
}