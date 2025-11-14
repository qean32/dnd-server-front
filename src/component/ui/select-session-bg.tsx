import React from 'react'
import { Title } from './title'
import { BGSessionItem } from './item'
import { getHTMLData } from '@/lib/function'

interface Props {
}


export const SelectSessionBG: React.FC<Props> = ({ }: Props) => {
    const [value, setValue] = React.useState('/img/dnd1.jpg')

    const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // @ts-ignore
        setValue(getHTMLData(e, 'value'))
    }
    return (
        <>
            <Title className='pb-4'>Фон плитки</Title>
            <div className="flex flex-wrap gap-5 max-w-[660px] pointer-events-none child-fill-event" onClick={clickHandler}>
                <input value={value} onChange={() => { }} hidden />
                <BGSessionItem path='/img/dnd+.jpg' value={value} />
                <BGSessionItem path='/img/dnd1.jpg' value={value} />
                <BGSessionItem path='/img/dnd2.jpg' value={value} />
                <BGSessionItem path='/img/dnd3.jpg' value={value} />
                <BGSessionItem path='/img/dnd4.jpg' value={value} />
            </div>
        </>
    )
}
