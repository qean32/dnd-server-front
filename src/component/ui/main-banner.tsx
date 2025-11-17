import React from 'react'

interface Props {
}


export const MainBanner: React.FC<Props> = ({ }: Props) => {
    return (
        <div className="relative">
            {/* <img src="/img/carousel-item-3.jpg" className="w-full bg-shadow" alt="" /> */}
            <div className="bg-img bg-shadow h-[90vh]" style={{ backgroundImage: `url("/img/main-bg-1.jpg")` }} ></div>
            <div className="absolute flex flex-col justify-center items-center inset-0">
                <div className="">
                    <p className="text-9xl -translate-x-1.5">D&D</p>
                    <p className="text-2xl">Играй вместе с нами!</p>
                </div>
            </div>
        </div>
    )
}
