import { tokenStorage } from "../../export"
import { tokenStorageDto } from "../../model"

export const getToken = () => {
    return (JSON.parse(localStorage.getItem(tokenStorage) as string) as tokenStorageDto)?.access
}