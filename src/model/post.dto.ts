export type postDto = {
    title: string,
    description: string,
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