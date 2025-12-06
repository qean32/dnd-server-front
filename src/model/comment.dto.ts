import { fileDto } from "./file.dto"
import { idDto } from "./id.dto"
import { userDto } from "./user.dto"


export type commentDto = idDto & {
    user: userDto
    text: string
    files: fileDto[]
    date: string
}