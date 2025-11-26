import { useHandlerClearQuery, useQueryParam } from "@/lib/castom-hook"
import { cn } from "@/lib/function"
import React from 'react'

interface SearchProps {
    className?: string
}

export const Search: React.FC<SearchProps> = ({ className = 'w-full' }: SearchProps) => {
    const [search, setSearch] = useQueryParam('search', '')
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    useHandlerClearQuery('search', setSearch)


    return (
        <div className={cn('relative', className)}>
            <input
                value={search}
                type="search"
                onChange={changeHandler}
                placeholder='поиск..'
            />
            <img src="/icon/search.svg" alt="" className='absolute icon-sm top-1/2 -translate-y-1/2 right-3' style={{ width: '21px' }} />
        </div>
    )
}

