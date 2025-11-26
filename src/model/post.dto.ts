export type postDto = {
    title: string,
    discription: string,
    tags: string
    user: {
        name: string
        id: number
    },
    department: string
    views: number
    likes: number
    fixed?: boolean
}