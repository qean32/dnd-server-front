import { RightSideGame } from "../component/general"
import { GroupButton } from "../component/ui"

export const TestPage = () => {
    return (
        <>
            <RightSideGame />
            <main className="p-5">
                <GroupButton>
                    <button className="p-2.5 flex justify-center items-center cursor-pointer"><img className="icon-sm" src="icon/character.svg" alt="" /></button>
                    <button className="p-2.5 flex justify-center items-center cursor-pointer"><img className="icon-sm" src="icon/grid.svg" alt="" /></button>
                    <button className="p-2.5 flex justify-center items-center cursor-pointer"><img className="icon-sm" src="icon/dragon.svg" alt="" /></button>
                    <button className="p-2.5 flex justify-center items-center cursor-pointer"><img className="icon-sm" src="icon/dragon.svg" alt="" /></button>
                </GroupButton>
            </main >
        </>
    )
}