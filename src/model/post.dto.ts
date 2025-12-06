import { idDto } from "./id.dto"

export type postDto = idDto & {
    title: string,
    description: string,
    tags: string
    user: {
        name: string
        id: number
        ava: string
    },
    department: string
    likes: number
    fixed?: boolean
}