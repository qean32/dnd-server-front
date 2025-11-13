import React from 'react'

interface Props {
    plus: boolean
    fn: (value: number) => void
}


export const ScrollXArrow: React.FC<Props> = ({ fn, plus }: Props) => {
    return (
        <div
            onMouseLeave={() => fn(!plus ? -20 : 20)}
            onSelect={() => { return false }}
            onSelectCapture={() => { return false }}
            className="cursor-pointer h-full flex justify-center items-center min-w-[40px] bg-color rounded-2xl"
            onMouseEnter={() => fn(!plus ? 20 : -20)}
            onClick={() => fn(!plus ? 200 : -200)}>
            <img src="/icon/double-arrow.svg" alt="" className={!plus ? '-scale-x-100' : ''} />
        </div>
    )
}
