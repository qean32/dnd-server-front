import React from 'react'
import { cn } from '@lib/function'
import { Search, SelectToQuery } from '@component/ui'

interface Props {
    className?: string
}


export const FilterPushSomething: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('pl-5 sticky top-0 bg-color py-6 pt-4 z-20', className)}>
            <p className='text-2xl pl-0.5 pb-2'>Фильтры</p>
            <div className="flex gap-3 pt-2 pr-1">
                <Search className='w-2/3' />
                <SelectToQuery
                    options={[
                        { value: '1', title: 'Базовый набор', id: 1 },
                        { value: '1', title: 'Набор Хелойвин', id: 2 },
                        { value: '1', title: 'Кастомный набор', id: 3 }
                    ]}
                />
            </div>
        </div>
    )
}
