import React from 'react'
import { cn } from '@lib/function'
import { Search, Select } from '@component/ui'

interface Props {
    className?: string
}


export const FilterAddSomething: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('pl-5 sticky top-0 bg-color py-5 pt-3 z-20', className)}>
            <p className='text-2xl pl-0.5'>Фильтры</p>
            <div className="flex gap-3 pt-2 pr-1">
                <Search className='w-2/3' />
                <Select options={[
                    { value: '1', title: 'Базовый набор' },
                    { value: '1', title: 'Набор Хелойвин' },
                    { value: '1', title: 'Кастомный набор' }
                ]} />
            </div>
        </div>
    )
}
