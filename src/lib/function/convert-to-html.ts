import { customMarkup } from "@/export"

export const convertToHTML = (text: string) => {
    return text.split(',').map(item => {
        const arr = item.split(' ')

        if (arr[0] == customMarkup.h1) {
            return `<p class="text-4xl">${arr.slice(1)}</p>`
        }
        if (arr[0] == customMarkup.small) {
            return `<p class="text-sm">${arr.slice(1)}<p>`
        }
        if (arr[0].slice(0, 4) == 'img:') {
            // @ts-ignore
            return `<img src="${arr[0].slice(4).replaceAll('>', '/')}" />`
        }


        return item
    }).join('')
}