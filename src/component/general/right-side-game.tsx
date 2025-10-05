import React from 'react'
import { cn } from '../../lib/function'
import { Button, Character, IconAndText, Select } from '../ui'

interface Props {
    className?: string
}


export const RightSideGame: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('fixed w-[15%] h-[100%] bg-color-dark', className)}>
            <Select
                className='w-[100%]'
                options={[
                    <IconAndText icon={<img src='/icon/human.svg' />} title='персонажи' />,
                    <IconAndText icon={<img src='/icon/dragon.svg' />} title='бестиарий' />,
                    <IconAndText icon={<img src='/icon/object.svg' />} title='обьекты' />,
                    <IconAndText icon={<img src='/icon/queue.svg' />} title='очередь' />
                ]} />
            <div className='h-[80%]'>
                <Character />
                <Character />
                <Character />
                <Character />
                <Character />
            </div>
            <div className='flex justify-center items-center pt-2'>
                <Button children={<p>следующий</p>} className='w-[90%]' />
            </div>
        </div>
    )
}
