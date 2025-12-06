import { changeTitle } from "@lib/function"

export const usePage = (title: string) => {
    changeTitle(title)
    window.scrollTo({ top: 0 })

    return {}
}