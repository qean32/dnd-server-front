import React from 'react'
import { Button, DatePickerUI, AddTagInFilter } from '@component/ui'
import { useNavigate } from 'react-router-dom'

interface Props {
}


export const FilterForum: React.FC<Props> = ({ }: Props) => {
    const navigate = useNavigate()

    return (
        <form className="w-2/6 min-w-[310px] max-w-2/6 h-fit flex-1 mt-6 rounded-md bg-color-dark p-5">
            <p className="text-2xl font-bold">ФИЛЬТРЫ</p>
            <DatePickerUI />

            <AddTagInFilter
                className="pt-5"
            />
            <div className='flex justify-between pt-15'>
                <Button
                    fn={() => { navigate(location.pathname) }}
                    variant='default-no-hover'
                    type='reset'
                >
                    <p>Сбросить</p></Button>
                {/* <div className='w-fit'><Link to={'/create-post'}>
                    <Button variant='acceess' className='mt-5 py-3'><img src='/icon/edit.svg' /></Button></Link></div> */}
            </div>
        </form>
    )
}
