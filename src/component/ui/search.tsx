import { useDebounce, useHandlerClearQuery, useQueryParam } from "@/lib/castom-hook"
import { cn } from "@/lib/function"
import React from 'react'

interface SearchProps {
    className?: string
}

export const Search: React.FC<SearchProps> = ({ className = 'w-full' }: SearchProps) => {
    const [_, setSearch] = useQueryParam('search', '')
    const [value, setValue] = React.useState('')
    const debounceValue = useDebounce(value)
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    React.useEffect(() => {
        setSearch(debounceValue)
    }, [debounceValue])
    useHandlerClearQuery('search', () => { setSearch(''); setValue('') })


    return (
        <div className={cn('relative', className)}>
            <input
                value={value}
                type="search"
                onChange={changeHandler}
                placeholder='поиск..'
            />
            <img src="/icon/search.svg" alt="" className='absolute icon-sm top-1/2 -translate-y-1/2 right-3' style={{ width: '21px' }} />
        </div>
    )
}

