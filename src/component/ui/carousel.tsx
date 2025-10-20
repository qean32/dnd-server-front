import React from 'react'

interface Props {
}


export const Carousel: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="overflow-hidden">
            <div className="w-[200%] carousel py-4 bg-color-darkness">
                <div className="w-full flex justify-around child-pointer">
                    <img src="/icon/dragon.svg" alt="" className="icon-md" />
                    <img src="/icon/human.svg" alt="" className="icon-md" />
                    <img src="/icon/object.svg" alt="" className="icon-md" />
                    <img src="/icon/game.svg" alt="" className="icon-md" />
                    <img src="/icon/tool.svg" alt="" className="icon-md" />
                    <img src="/icon/logo.svg" alt="" className="icon-md" />
                    <img src="/icon/community.svg" alt="" className="icon-md" />
                    <img src="/icon/home.svg" alt="" className="icon-md" />
                </div>
                <div className="w-full flex justify-around child-pointer">
                    <img src="/icon/dragon.svg" alt="" className="icon-md" />
                    <img src="/icon/human.svg" alt="" className="icon-md" />
                    <img src="/icon/object.svg" alt="" className="icon-md" />
                    <img src="/icon/game.svg" alt="" className="icon-md" />
                    <img src="/icon/tool.svg" alt="" className="icon-md" />
                    <img src="/icon/logo.svg" alt="" className="icon-md" />
                    <img src="/icon/community.svg" alt="" className="icon-md" />
                    <img src="/icon/home.svg" alt="" className="icon-md" />
                </div>
            </div>
        </div>
    )
}
