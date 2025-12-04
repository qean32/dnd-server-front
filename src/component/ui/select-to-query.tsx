import { useQueryParam } from "@/lib/castom-hook"
import { cn } from "@/lib/function"

interface SelectProps {
    className?: string
    options: { value: string, title: string, id: number }[]
}


export const SelectToQuery: React.FC<SelectProps> = ({ className = 'w-fit', options }: SelectProps) => {
    const { pushQ } = useQueryParam('select')

    return (
        <select
            className={cn('flex-1', className)}
            onChange={e => pushQ(e.target.value)}
        >
            {options.map(({ title, value, id }) => {
                return <option key={id} value={value}>{title}</option>
            })}
        </select>
    )
}