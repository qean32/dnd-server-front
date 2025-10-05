import { RightSideGame } from "../component/general"
import { HeightToolGame } from "../component/shared"
import { Token } from "../component/token"
import { useDraggable } from "../lib/castom-hook"

export const GamePage = () => {
    const { dragEndHandler, ref } = useDraggable()

    return (
        <>
            <RightSideGame />
            <HeightToolGame />
            <main className="w-[100%] h-[90vh] relative">
                <div
                    ref={ref}
                    draggable
                    onDragEnd={dragEndHandler}
                    className="w-[1400px] h-[750px] rounded-lg fixed overflow-hidden bg-color-dark cursor-pointer top-1/5 left-1/4"
                >
                    <div className="area w-full h-full relative" style={{ scale: '1.005' }}>
                        <div className="absolute top-1/2 left-1/2 -translate-1/2">center</div>
                        <Token />
                    </div>
                </div>
            </main >
        </>
    )
}