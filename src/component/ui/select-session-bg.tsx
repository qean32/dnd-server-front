import React from 'react'
import { Title } from './title'
import { BGSessionItem } from './item'
import { getHTMLData } from '@/lib/function'

interface Props {
}


export const SelectSessionBG: React.FC<Props> = ({ }: Props) => {
    const [value, setValue] = React.useState('/img/carousel-item-1.jpg')

    const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // @ts-ignore
        setValue(getHTMLData(e, 'value'))
    }
    return (
        <>
            <Title className='pb-4'>Фон плитки</Title>
            <div className="flex flex-wrap gap-5 max-w-[660px] pointer-events-none child-fill-event" onClick={clickHandler}>
                <input value={value} onChange={() => { }} hidden />
                <BGSessionItem path='/img/carousel-item-1.jpg' value={value} />
                <BGSessionItem path='/img/carousel-item-2.jpg' value={value} />
                <BGSessionItem path='/img/carousel-item-3.jpg' value={value} />
                <BGSessionItem path='/img/carousel-item-4.jpg' value={value} />
                <BGSessionItem path='/img/carousel-item-5.jpg' value={value} />
                <BGSessionItem path='/img/carousel-item-6.jpg' value={value} />
            </div>
        </>
    )
}
