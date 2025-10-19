import { positionDto } from "./position.dto"

export interface entityDto {
    id: number
    name: string
    position: positionDto
    path: string
    discription: string
    status: 'live' | 'dead' | 'stan'
    view: boolean
}