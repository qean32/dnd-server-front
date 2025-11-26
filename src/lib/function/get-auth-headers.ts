import { tokenStorage } from "@/export"
import { getToken } from "./get-token"

export const getAuthHeaders = (file: boolean = false) => {
    return file ?
        { 'Authorization': `${JSON.parse(localStorage.getItem(tokenStorage) as string).access}` }
        :
        (getToken() ?
            {
                'Content-Type': 'application/json',
                'Authorization': `${JSON.parse(localStorage.getItem(tokenStorage) as string).access}`
            }
            :
            {
                'Content-Type': 'application/json',
            }
        )
}