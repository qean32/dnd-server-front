import { useParams } from "react-router-dom"

export const getParamName = () => {
    const { name } = useParams()

    return name ?? 'error get param name'
}