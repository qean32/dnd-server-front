import React from 'react'
import { Title } from './title'
import { PlateGameItem } from './item'

interface Props {
}


export const SelectGameBG: React.FC<Props> = ({ }: Props) => {
    const [value, setValue] = React.useState('/img/dnd1.jpg')

    const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // @ts-ignore
        setValue(e.target.getAttribute('value'))
    }
    return (
        <>
            <Title className='pb-4'>Фон плитки</Title>
            <div className="flex flex-wrap gap-5 max-w-[660px] pointer-events-none child-fill-event" onClick={clickHandler}>
                <input value={value} onChange={() => { }} hidden />
                <PlateGameItem path='/img/dnd+.jpg' value={value} />
                <PlateGameItem path='/img/dnd1.jpg' value={value} />
                <PlateGameItem path='/img/dnd2.jpg' value={value} />
                <PlateGameItem path='/img/dnd3.jpg' value={value} />
                <PlateGameItem path='/img/dnd4.jpg' value={value} />
            </div>
        </>
    )
}
