import { requestPost } from "@lib/function/request"
import { authFormDto, registrationFormDto } from "@/model/schema"
const instance = 'auth'

export const authService = {
    login: async (body: authFormDto) => {
        return requestPost(`${instance}`, body)
    },

    registration: async (body: registrationFormDto) => {
        return requestPost(`${instance}/registration`, body)
    },

    refreshAuth: async () => {
        return requestPost(`${instance}/refresh-auth`, {})
    }
}