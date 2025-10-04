import { userDto } from "./user.dto"

export interface messageDto {
    id: number
    hashMessage: string
    isView: boolean
    files?: string
    fromId: userDto
    createdAt: string
}