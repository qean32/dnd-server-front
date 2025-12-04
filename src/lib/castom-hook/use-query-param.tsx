import { useSearchParams } from "react-router-dom"

export const useQueryParam = (key: string) => {
    const [param, setParam] = useSearchParams()
    const searchParams = new URLSearchParams(window.location.search);

    const pushQ = (value: string) => {
        setParam({
            ...Object.fromEntries(searchParams),
            [key]: value,
        })
    }

    const clearQ = () => {
        setParam({})
    }

    return { param: param.get(key) ?? '', pushQ, clearQ, allQ: Object.fromEntries(searchParams) }
}