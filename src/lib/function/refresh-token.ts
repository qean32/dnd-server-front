import { invalidTokenMessage, tokenStorage } from "@/export"
import { getToken } from "./get-token"
import { setToken } from "./set-token"
import { authService } from "@/service"

export const refreshToken = () => {
    // @ts-ignore
    getToken() && authService.refreshAuth().then((token: string) => {
        if (token == invalidTokenMessage) {
            localStorage.removeItem(tokenStorage)
            return
        }

        setToken(token)
    })
}