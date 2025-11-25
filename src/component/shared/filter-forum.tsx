import React from 'react'
import { Button, DatePickerUI } from '@component/ui'
import { AddTag } from '.'
import { useQueryPush } from '@/lib/castom-hook'
import { clearQuery } from '@/lib/function'

interface Props {
}


export const FilterForum: React.FC<Props> = ({ }: Props) => {
    const push = useQueryPush()

    return (
        <form className="w-2/6 min-w-[310px] max-w-2/6 h-fit flex-1 mt-6 rounded-md bg-color-dark p-5">
            <p className="text-2xl font-bold">ФИЛЬТРЫ</p>
            <DatePickerUI />

            <AddTag className="pt-5" push={push} />
            <div className='flex justify-between'>
                <Button fn={clearQuery} className='mt-4' variant='default-no-hover' type='reset'><p>Сбросить</p></Button>
                {/* <div className='w-fit'><Link to={'/create-post'}>
                    <Button variant='acceess' className='mt-5 py-3'><img src='/icon/edit.svg' /></Button></Link></div> */}
            </div>
        </form>
    )
}
